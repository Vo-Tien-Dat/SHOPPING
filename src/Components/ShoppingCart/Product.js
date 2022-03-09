
import { useDispatch } from 'react-redux';
import deleteProduct from '../../Store/Actions/deleteProduct';
import changeProduct from '../../Store/Actions/changeProduct';


import {InputGroup, FormControl, Container} from 'react-bootstrap'
import { Button, Row, Col } from 'react-bootstrap';
function Product(props){
    const {payload, index} = props;
    const {price, value, title} = payload;
    const dispatch = useDispatch();
    console.log(payload, index);
    const handleUpProduct = () =>{
        console.log(index);
        console.log(value);
        dispatch(changeProduct({
            index
        }))
    }

    const handleDownProduct = () => {
        
    }


    const handleDeleteProduct = () =>{
       
    }
    return(
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>
                <Container fluid="sm">
                    <Row>
                        <Col sm = {4}>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" onClick = {handleDownProduct}>-</Button>
                                <FormControl value = { value } aria-label="Example text with two button addons"/>
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