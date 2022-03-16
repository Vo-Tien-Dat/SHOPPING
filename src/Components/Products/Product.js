import {Card, Button, Container} from 'react-bootstrap';
import './Product.scss';
import {Link} from 'react-router-dom';

function Product(props){
    const {id, image, title, price} = props.product;
    return(
        <Link to = {`/product/${id}`} style = {{
            textDecorationLine: 'none',
            color: 'black',
            
        }}>
            <Container style={{ 
                width: '18rem',
                height: '350px',
                padding: '0px',
                position: 'relative'
            }}>
                <Container style = {{
                    
                }} className = "products">
                    <Card style={{ 
                        width: '100%',
                        height: '100%',
                    }}>
                        <Card.Img variant="top" src = { image } style = {{
                            height: '75%'
                        }} />
                        <Card.Body >
                            <Card.Title className = "TitleProduct">{title}</Card.Title>
                            <Card.Text>{price}</Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </Link>
        
    )
}

export default Product;