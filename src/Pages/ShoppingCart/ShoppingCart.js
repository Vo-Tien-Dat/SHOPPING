
import {Container, Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from '../../Components/ShoppingCart/Product';
import { Button } from 'react-bootstrap';
function ShoppingCart(){
    const products = useSelector(state => state.reducerProduct);
    console.log('rendering...');
    const sumTotalProduct  = products.reduce((total, currentValue ) => {
        let {value, price} = currentValue.payload;
        return total + value * price;
    },0);
    if(products != null){
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
                    <h1> {`Tổng tiền tạm tính:${sumTotalProduct}`} </h1>
                    <Button>Tiến hành đặt hàng</Button>
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