import {Button} from 'react-bootstrap';

function Product(props){
    const {title, price, value} = props.payload;
    return(
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>{value}</td>
            <td>{price * value}</td>
            <td>
                <Button> Xóa sản phẩm</Button>
            </td>
        </tr>
    )
}

export default Product;