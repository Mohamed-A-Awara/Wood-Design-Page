import { } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'


// Styles
import './Header.style.css'
import logo from '../../assets/Images/Logo.png'

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navParent">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            src={logo}
                            className='header-logo'
                            alt="logo"
                            
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0 headerLinks"
                        >
                            <Nav.Link href="#action1" className='homeLink'>Home</Nav.Link>
                            <Nav.Link href="#action2">Services</Nav.Link>
                            <Nav.Link href="#action2">Contect</Nav.Link>
                            <Nav.Link href="#action2">Support</Nav.Link>

                            
                        </Nav>
                        <Form className="d-flex">
                            <button className='btnSign'>Sign Up</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header