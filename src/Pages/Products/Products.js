import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import {useState, useEffect} from 'react';
import Product from "../../Components/Products/Product";

function Products(){
    const option = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState(undefined);
    useEffect(() => {
      axios.get(option)
      .then(
            (res) =>{
                if(res.data != undefined){
                    
                    setProducts(res.data);
                }
            }
      )
      .catch(error => console.log(error));
    
      return () => {

      }
    }, [])
    
    return(
        <Container style = {{
            marginTop: '10px'
        }}>
            <Row>
            {
                products != undefined
                ?products.map(
                    (product, index) => (
                        <Col sm = {3} key = {index}>
                            <Product product = { product } />
                        </Col>
                    )
                )
                :(
                    <Container>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Container>
                )
            }
            </Row>
        </Container>
    ) 
}

export default Products;