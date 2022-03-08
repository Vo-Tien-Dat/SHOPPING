
import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from '../../Components/ShoppingCart/Product';

function ShoppingCart(){
    const products = useSelector(state => state.reducerProduct);
    console.log(products);
    return(
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
                            <Product payload = {data.payload}/>
                        )
                })
            }
            </tbody>
        </Table>
    )
}

export default ShoppingCart;