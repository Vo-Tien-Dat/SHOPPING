import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

function Cart() {
    var listSelect = ['Nhận tại cửa hàng', 'Giao hàng tận nơi'];
    const products = useSelector(state => state.reducerProduct);
    const sumTotalProduct  = products.reduce((total, currentValue ) => {
        let {value, price} = currentValue.payload;
        return total + (price * value);
    },0);
    return(
        <Container>
            <Container style = {{
                marginTop:'20px',
                width: '60%',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                borderRadius: '20px',
                padding: '15px'
            }}>

                <Form style = {{
                    overflow: 'auto'
                }}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style = {{
                            float: 'left',
                            fontWeight:'700',
                            fontSize:'20px'
                        }}>Thông tin khách hàng</Form.Label>
                        <Form.Control type="email" placeholder="Họ và tên khách hàng" style = {{
                            marginTop: '10px'
                        }} />
                        <Form.Control type="email" placeholder="Số điện thoại" style = {{
                            marginTop: '10px'
                        }}/>
                        <Form.Control type="email" placeholder="Email (vui lòng điền thông tin email để nhận hóa đơn VAT)" style = {{
                            marginTop: '10px'
                        }}/>
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                        <Form.Label style = {{
                            fontWeight:'700',
                            fontSize:'20px',
                            float: 'left'
                        }} className = "CachThucGiaoHang">Chọn cách thức giao hàng</Form.Label>
                        <Form style = {{
                            overflow:'auto'
                        }}>
                            {listSelect.map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label={`${type}`}
                                        name="group1"
                                        type={`radio`}
                                        id={`inline-${type}-2`}
                                    />
                                </div>
                            ))}
                            </Form>
                    </Form.Group>
                    
                </Form>
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

export default Cart;