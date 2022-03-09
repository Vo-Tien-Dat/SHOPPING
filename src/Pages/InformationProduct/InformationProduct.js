import { Container, Row, Col, Spinner, Card, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';

import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import addProduct from "../../Store/Actions/addProduct";


function InformationProduct(){
    const {id} = useParams();
    var option = `https://fakestoreapi.com/products/${id}`;
    const [information, setInformation] = useState(undefined);
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();



    useEffect(() => {
      axios.get(option)
      .then(
          (res) =>{
              if(res.data != undefined){
                setInformation(res.data);
              }
          }
      )
      .catch( error => console.log(error));
    
      return () => {
        
      }
    }, [])

    const handleAddProduct = () => {
        const {title, price} = information;
        dispatch(addProduct({
            title,
            price, 
            value
        }));
    }
    
    const handleUpValue = () => {
        setValue(value + 1);
    }

    const handleDownValue = () => {
        if(value > 1){
            setValue(value - 1);
        }
    }

    const handleChangeValue = (event) =>{
        let s = event.target.value;
        if(s[s.length -1] >='0' && s[s.length - 1] <= '9'){
            setValue(Number(s));
        }        
    }

    if(information != undefined){
        const {id, title, price, image, description} = information;
        return(
            <Container>
                <Row style = {{
                    border: 'black',
                    backgroundColor: '#F0F8FF',
                    borderRadius:'5px',
                    height: '500px'
                }}>
                    <Col sm = {4} style = {{
                        height: '100%'
                    }}>
                        <Image src = {image} style = {{
                            height: '100%'
                        }}/>
                    </Col>
                    <Col sm = {8} style = {{
                        height: '100%'
                    }}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {title}
                                </Card.Title>

                                <Card.Text>
                                    {price}
                                </Card.Text>

                                <Card.Text>
                                    {description}
                                </Card.Text>
                            </Card.Body>
                            <Container>
                                <Row>
                                    <Col sm = {6}>
                                        <h6> Số lượng: </h6>
                                    </Col>
                                    <Col sm = {3}>
                                        <InputGroup className="mb-3">
                                            <Button variant="outline-secondary" onClick = {handleDownValue}>-</Button>
                                            <FormControl value = { value } aria-label="Example text with two button addons" onChange = {handleChangeValue}/>
                                            <Button variant="outline-secondary" onClick = {handleUpValue}>+</Button>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Button onClick = {handleAddProduct}> THÊM VÀO GIỎ HÀNG</Button>
                            </Container>
                        </Card>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
    else{
        return(
            <Container>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        )
    }
    
}

export default InformationProduct;