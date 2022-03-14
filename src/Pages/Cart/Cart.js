import { Container, Form, Button } from "react-bootstrap";
import {useSelector} from 'react-redux';

function Cart() {
    var listSelect = ['Nhận tại cửa hàng', 'Giao hàng tận nơi'];
    const products = useSelector(state => state.reducerProduct);
    const sumTotalProduct  = products.reduce((total, currentValue ) => {
        let {value, price} = currentValue.payload;
        return total + (price * value);
    },0);
    return(
        <>
            <Container style = {{
                width: '700px'
            }}>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style = {{
                            float: 'left',
                            fontWeight:'700',
                            fontSize:'20px'
                        }}>Thông tin khách hàng</Form.Label>
                        <Form.Control type="email" placeholder="Họ và tên khách hàng" />
                        <Form.Control type="email" placeholder="Số điện thoại" />
                        <Form.Control type="email" placeholder="Email (vui lòng điền thông tin email để nhận hóa đơn VAT)" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                        <Form.Label style = {{
                            fontWeight:'700',
                            fontSize:'20px'
                        }}>Chọn cách thức giao hàng</Form.Label>
                        <Form>
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

            <Container>
                <h6>{`Tổng Tiền Thanh Toán: ${sumTotalProduct}`}</h6>
                <Button> Tiếp Tục</Button>
            </Container>
        </>
        
    )
}

export default Cart;