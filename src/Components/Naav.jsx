import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import './Naav.css'

const Naav = () => {
    return (
        <div className='navContainer'>
            <Navbar expand="lg" className="bg-body-tertiary customNav">
                <Container fluid>
                    <Navbar.Brand href="#" className='alohatext'>Aloha</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100vh', marginLeft: '50px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Surfing</Nav.Link>
                            <Nav.Link href="#action2">Hula</Nav.Link>
                            <Nav.Link href="#action2">Vulcano</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="outline-success">Book a trip</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <div className="centered-text">
            Welcome<br />to Hawaii
            </div> */}


            <Container fluid className="text-container">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col xs={12} sm={8} md={6} lg={6} className="text-center centered-text">
                        <h1 className="text-responsive">Welcome to Hawaii</h1>
                        
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Naav
