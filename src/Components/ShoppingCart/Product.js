
import { useDispatch } from 'react-redux';
import deleteProduct from '../../Store/Actions/deleteProduct';
import changeProduct from '../../Store/Actions/changeProduct';


import {InputGroup, FormControl, Container} from 'react-bootstrap'
import { Button, Row, Col } from 'react-bootstrap';
function Product(props){
    const {payload, index} = props;
    const {price, value, title} = payload;
    const dispatch = useDispatch();
    const handleUpProduct = () =>{
        dispatch(changeProduct({
            index,
            value: value + 1
        }))
    }

    const handleDownProduct = () => {
        if(value > 1){
            dispatch(changeProduct({
                index,
                value: value - 1
            }))
        }
        
    }


    const handleDeleteProduct = () =>{
       dispatch(deleteProduct({index}));
    }


    const handleChangeValue = () =>{

    }
    return(
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>
                <Container >
                    <Row>
                        <Col sm = {4}></Col>
                        <Col sm = {4}>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" onClick = {handleDownProduct}>-</Button>
                                <FormControl value = { value } aria-label="Example text with two button addons" onChange = {handleChangeValue}/>
                                <Button variant="outline-secondary" onClick = {handleUpProduct}>+</Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
                
            </td>
            <td>{price * value}</td>
            <td>
                <Button onClick = {handleDeleteProduct}> Xóa sản phẩm</Button>
            </td>
        </tr>
    )
}

export default Product;