import "./style.css"
import React from "react";
import { Container, Navbar, Nav, Form, FormControl, Image, Card } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';


import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function Menue() {
    const toggleMenu = () => {
        const navigation = document.querySelector('.navigation');
        const main = document.querySelector('.main');
        navigation.classList.toggle('active');
        main.classList.toggle('active');
    };

    const activateLink = () => {
        const listItems = document.querySelectorAll('.navigation li');
        listItems.forEach(item => item.classList.remove('hovered'));
        this.classList.add('hovered');
    };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">
                                <span className="icon"><SearchIcon/></span>
                                <span className="title">Guest Service</span>
                            </Nav.Link>
                            {/* Add other Nav.Links here */}
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search Here" className="mr-2"/>
                            <SearchIcon/>
                        </Form>
                        <Image src="IMG/Armin_p.jpg" alt="" className="user"/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <div className="cardBox">
                    <Card>
                        <Card.Body>
                            <div className="numbers">1,540</div>
                            <div className="cardName">Tägliche Ansichten</div>
                            <div className="iconBx"><SearchIcon/></div>
                        </Card.Body>
                    </Card>
                    {/* Repeat Card component for other cards */}
                </div>
            </Container>
        </div>
    )

}
