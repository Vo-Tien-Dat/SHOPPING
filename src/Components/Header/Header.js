
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';
import '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/img/logo.png';
import './Header.scss';
function Header(){  
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to = "/" style = {{
                        color: "white",
                        textDecoration: 'none'
                    }}>
                        <img src = {logo} style = {{
                            height: '40px'
                        }}/>
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to = "/home" style = {{
                        color: "white",
                        textDecoration: 'none',
                        fontWeight:'700'
                    }} className = "NavbarHover">HOME</Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to = "/product" style = {{
                            textDecorationLine: 'none',
                            color: 'white',
                            fontWeight:'700'
                        }} className = "NavbarHover">PRODUCT</Link>
                    </Nav.Link>
                    
                    <Nav.Link>
                        <Link to = "/contact" style = {{
                            textDecorationLine: 'none',
                            color: 'white',
                            fontWeight:'700'
                        }}className = "NavbarHover">CONTACT</Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to = "/shopping-cart">
                            <FontAwesomeIcon icon={faCartArrowDown} style = {{
                                height: '25px',
                                color: 'white'
                            }}/>
                        </Link>
                    </Nav.Link>
                </Nav>
                
            </Container>
        </Navbar>
    )
}

export default Header;