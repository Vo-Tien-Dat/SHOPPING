
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';
import '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faS, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                <Nav className="me-auto">

                <Nav.Link>
                    <Link to = "/home" Style = {{
                        textDecorationLine: 'none',
                        color: 'white'
                    }}>Home</Link>
                </Nav.Link>

                <Nav.Link>
                    <Link to = "/product" style = {{
                        textDecorationLine: 'none',
                        color: 'white'
                    }}>Product</Link>
                </Nav.Link>
                
                <Nav.Link>
                    <Link to = "/contact" style = {{
                        textDecorationLine: 'none',
                        color: 'white'
                    }}>Contact</Link>
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