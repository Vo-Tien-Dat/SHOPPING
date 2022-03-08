import {Card, Button,} from 'react-bootstrap';
import './Product.scss';
import {Link} from 'react-router-dom';

function Product(props){
    const {id, image, title, price} = props.product;
    return(
        <Link to = {`/product/${id}`} style = {{
            textDecorationLine: 'none',
            color: 'black'
        }}>
            <Card style={{ 
                width: '18rem',
                height: '350px',
                padding:'20px'
            }}>
                <Card.Img variant="top" src = { image } style = {{
                    height: '80%'
                }} />
                <Card.Body>
                    <Card.Title className = "TitleProduct">{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
        
    )
}

export default Product;