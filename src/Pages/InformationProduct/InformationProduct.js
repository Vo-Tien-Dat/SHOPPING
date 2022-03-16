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
        const {title, price, image} = information;
        dispatch(addProduct({
            id,
            title,
            price, 
            value,
            image
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
            <Container style = {{
                marginTop: '20px'
            }}>
                <Row style = {{
                    border: 'black',
                    height: '500px',
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                }}>
                    <Col sm = {4} style = {{
                        height: '100%',
                        
                    }}>
                        <Image src = {image} style = {{
                            height: '90%',
                            width: '95%',
                            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                        }}/>
                    </Col>
                    <Col sm = {8} style = {{
                        height: '100%'
                    }}>
                        
                        <Container style = {{
                            height: '70%',
                            paddingTop:'20px',
                            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                            borderRadius: '15px'
                        }}>

                            <div style = {{
                                overflow: 'auto'
                            }}>
                                <h6 style = {{
                                    fontSize: '30px',
                                    textAlign: 'left'
                                }}>{title}</h6>
                            </div>

                            <div style = {{
                                overflow: 'auto'
                            }}>
                                <h6 style = {{
                                    fontSize:'20px',
                                    textAlign: 'left'
                                }}>{price}</h6>
                            </div>
                            
                            <div style = {{
                                overflow: 'auto'
                            }} >
                                <h6 style = {{
                                    fontSize: '15px',
                                    float: 'left',
                                    textAlign: 'left'
                                }}>{description}</h6>
                            </div>
                            
                        </Container>
                        <Container style = {{
                            height: '30%',
                            padding: '5%'
                        }}>
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
                            <Button onClick = {handleAddProduct} style = {{
                                backgroundColor: 'orange'
                            }}> THÊM VÀO GIỎ HÀNG</Button>
                        </Container>
                        
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