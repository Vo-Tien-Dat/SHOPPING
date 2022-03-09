
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';
import '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to = "/" style = {{
                        color: "white",
                        textDecoration: 'none'
                    }}>Navbar</Link>
                </Navbar.Brand>
                <Nav className="me-auto">

                    <Nav.Link>
                        <Link to = "/home" style = {{
                        color: "white",
                        textDecoration: 'none'
                    }}>HOME</Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to = "/product" style = {{
                            textDecorationLine: 'none',
                            color: 'white'
                        }}>PRODUCT</Link>
                    </Nav.Link>
                    
                    <Nav.Link>
                        <Link to = "/contact" style = {{
                            textDecorationLine: 'none',
                            color: 'white'
                        }}>CONTACT</Link>
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