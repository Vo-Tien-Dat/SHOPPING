
import {Container, Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from '../../Components/ShoppingCart/Product';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ShoppingCart(){
    const products = useSelector(state => state.reducerProduct);
    const sumTotalProduct  = products.reduce((total, currentValue ) => {
        let {value, price} = currentValue.payload;
        return total + (price * value);
    },0);
    if(products != null){
        if(products.length != 0){
        }
        return(
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Số tiền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        products.map(
                            (data, index) =>{
                                return(
                                    <Product key = {index} index = {index} payload = {data.payload}/>
                                )
                        })
                    }
                    </tbody>
                </Table>
                <Container>
                    <h1> {`Tổng tiền tạm tính:${parseFloat(sumTotalProduct).toFixed(2)}`} </h1>
                    <Button>
                        <Link to = "/cart" style = {{
                            textDecoration: 'none',
                            color: 'white'
                        }}>Tiến hành đặt hàng</Link>
                    </Button>
                </Container>
            </>
        )
    }
    else{
        <Container>
            <h4> CART IS EMPTY </h4>
        </Container>
    }
    
}

export default ShoppingCart;