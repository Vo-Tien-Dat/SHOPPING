
import {ButtonGroup, Container, Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from '../../Components/ShoppingCart/Product';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ShoppingCart(){
    const products = useSelector(state => state.reducerProduct);
    const sumTotalProduct  = products.reduce((total, currentValue ) => {
        let {value, price} = currentValue.payload;
        return total + (price * value);
    },0);
    if(products != null){
        console.log(products.length === 0);
        if(products.length !== 0){
            return(
                <Container>
                    <Container>
                        {
                            products.map(
                                (data, index) =>{
                                    return(
                                        <Product key = {index} index = {index} payload = {data.payload}/>
                                    )
                            })
                        }
                    </Container>
    
                    <Container style = {{
                        marginTop: '20px',
                        width: '60%',
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                        borderRadius: '20px'
                    }}>
                        <Container>
                            <Row>
                                <Col sm = {8}>
                                    <h4 style = {{
                                        marginTop: '5px'
                                    }}> {`Tổng tiền tạm tính:`} </h4>
                                </Col>
                                <Col sm = {4}>
                                    <h4>{`${parseFloat(sumTotalProduct).toFixed(2)}`}</h4>
                                </Col>
                            </Row>
                        </Container>
                        <Button style = {{
                            marginTop: '5px',
                            marginBottom:'10px',
                            backgroundColor: 'orange',
                            width: '100%',
                            border: '1px solid orange',
                            fontWeight: '700'
                        }}>
                            <Link to = "/cart" style = {{
                                textDecoration: 'none',
                                color: 'white'
                            }}>Tiến hành đặt hàng</Link>
                        </Button>
                    </Container>
                </Container>
            )
        }
        else{
            return(
                <Container fluid style = {{
                    position: 'relative'
                }}>
                    <Container>
                        <h4> Không có sản phầm trong giỏ hàng </h4>
                        <Button style = {{
                            backgroundColor: 'orange',
                            border: '1px solid orange'
                        }}>
                            <Link to= "/" style = {{
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    backgroundColor: 'orange',
                                    height: '100px',
                                    borderRadius: '5px'

                            }}>Quay trở về trang chủ</Link>
                        </Button>
                    </Container>
                </Container>  
            )
        }
        
    }
    else{
        <Container style = {{
            height: '500px'
        }}>
            <h4> Không có sản phầm trong giỏ hàng </h4>
            <button>
                <Link to path = "/">Quay trở về trang chủ</Link>
            </button>
        </Container>
    }
    
}

export default ShoppingCart;