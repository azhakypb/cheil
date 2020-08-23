import React from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

const UpperHeader = () => (
    <Container fluid>
        <Navbar bg="light header" expand="lg">
            <Nav className="mr-auto">
                <Nav.Link href="#home">МОБИЛЬНЫЕ УСТРОЙСТВА</Nav.Link>
                <Nav.Link href="#features">ТВ И АУДИО</Nav.Link>
                <Nav.Link href="#pricing">ДЛЯ ДОМА</Nav.Link>
                <Nav.Link href="#pricing">IT</Nav.Link>
            </Nav>

            <div class="text-center sams">
                <Navbar.Brand href="#home">
                    <Image
                        src="https://img.global.news.samsung.com/ru/wp-content/uploads/2017/11/Samsung-logo.jpg"
                        width="22%"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </div>


            <Nav className="mr-auto">
                <Nav.Link href="#home">EXPLORE</Nav.Link>
                <Nav.Link href="#home">АКЦИИ</Nav.Link>
                <Nav.Link href="#home">ПОДДЕРЖКА</Nav.Link>
                <Nav.Link href="#home">БИЗНЕС</Nav.Link>
                <Nav.Link href="#home"><FontAwesomeIcon icon={faSearch}/></Nav.Link>
            </Nav>
   
        </Navbar>
    </Container>
)

export default UpperHeader;

