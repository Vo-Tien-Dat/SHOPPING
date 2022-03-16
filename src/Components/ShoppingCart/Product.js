
import { useDispatch } from 'react-redux';
import deleteProduct from '../../Store/Actions/deleteProduct';
import changeProduct from '../../Store/Actions/changeProduct';


import {InputGroup, FormControl, Container} from 'react-bootstrap'
import { Button, Row, Col } from 'react-bootstrap';

import {Link} from 'react-router-dom';
function Product(props){
    const {payload, index} = props;
    const {id, price, value, title,image} = payload;
    console.log(image);
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
        <Container style = {{
            borderRadius:'15px',
            width: '60%',
            marginTop: '15px',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }}>
            <Row >
                <Col sm = {4}>
                    <img src = {image} style = {{
                        width: '100%'
                    }}/>
                </Col>
                <Col sm = {8}>
                    <Link to = {`/product/${id}`} style = {{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: '600'
                    }} >{title}</Link>
                    <h6>{price}</h6>
                    <Container >
                        <Row>
                            <Col sm = {4}>Chọn số lượng: </Col>
                            <Col sm = {4}>
                                <InputGroup className="mb-3">
                                    <Button variant="outline-secondary" onClick = {handleDownProduct}>-</Button>
                                    <FormControl value = { value } aria-label="Example text with two button addons" onChange = {handleChangeValue}/>
                                    <Button variant="outline-secondary" onClick = {handleUpProduct}>+</Button>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Button onClick = {handleDeleteProduct} style = {{
                        backgroundColor: 'orange',
                        border: '1px solid orange',
                        fontWeight: '700'
                    }}> Xóa Sản Phẩm</Button>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Product;