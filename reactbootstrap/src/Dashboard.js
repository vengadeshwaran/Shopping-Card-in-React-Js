import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import './ApplyCss.css'

const Dashboard = () => {

    const [cardValue, setCardValue] = useState(0);

    const handleAddCard=()=>{
        setCardValue(cardValue+1)
    }


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <NavDropdown title="Shop" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">All Products</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">
                                    Popular Items
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    New Arrivals
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Button variant="outline-dark"><ShoppingCartIcon></ShoppingCartIcon><span className='buttonBootstrap'>Card</span><p className='pTag'>{cardValue}</p></Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='slideBar'>
                <section>
                    <p className='Shop'>Shop in style</p>
                    <p className='Tem'>With this shop hompeage template</p>
                </section>
            </div>
            <div className='gridComp'>
                <Container>
                    <Row className='rowCol'>
                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                                <Card.Body>
                                    <Card.Title><b>Fancy Product </b></Card.Title>
                                    <br />
                                    <Card.Text>$40.00 - $80.00 </Card.Text>
                                    <Button variant="outline-dark">View Options</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col><Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                                <p className='pos'>sale</p>
                                <Card.Body>
                                    <Card.Title><b>Special Item</b></Card.Title>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <Card.Text>$20.00 $18.00 </Card.Text>
                                    <Button variant="outline-dark" onClick={()=>handleAddCard()}>Add Card</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                                <p className='pos'>sale</p>
                                <Card.Body>
                                    <Card.Title><b>Sale Item</b></Card.Title>
                                    <br />
                                    <Card.Text><s>$50.00</s> $25.00 </Card.Text>
                                    <Button variant="outline-dark" onClick={()=>handleAddCard()}>Add Card</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col><Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                                <Card.Body>
                                    <Card.Title><b>Popular Item</b></Card.Title>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <Card.Text>$40.00 </Card.Text>
                                    <Button variant="outline-dark" onClick={()=>handleAddCard()}>Add Card</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='rowCol'>
                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                                <p className='pos'>sale</p>
                                <Card.Body>
                                    <Card.Title><b>Sale Item</b></Card.Title>
                                    <br />
                                    <Card.Text><s>$50.00</s> $25.00 </Card.Text>
                                    <Button variant="outline-dark" onClick={()=>handleAddCard()}>Add Card</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col><Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                                <Card.Body>
                                    <Card.Title><b>Fancy Product </b></Card.Title>
                                    <br />
                                    <Card.Text>$120.00 - $280.00 </Card.Text>
                                    <Button variant="outline-dark" >View Options</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                                <p className='pos'>sale</p>
                                <Card.Body>
                                    <Card.Title><b>Special Item</b></Card.Title>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <Card.Text><s>$20.00</s>  $18.00  </Card.Text>
                                    <Button variant="outline-dark" onClick={()=>handleAddCard()}>Add Card</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col><Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                                <Card.Body>
                                    <Card.Title><b>Popular Item</b></Card.Title>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <StarRoundedIcon className='star'></StarRoundedIcon>
                                    <Card.Text>$40.00 </Card.Text>
                                    <Button variant="outline-dark" onClick={()=>handleAddCard()}>Add Card</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='slideBar'>
                <section>
                    <p className='Shop'></p>
                    <p className='footer'>Copyright © Your Website 2022</p>
                </section>
            </div>
        </div>
    )
}

export default Dashboard;