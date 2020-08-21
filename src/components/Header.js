import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import imgUp from './samsung_delivers-1440.jpg'

function Header() {
  return (
    <Container fluid>
      <Navbar bg="light header" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">МОБИЛЬНЫЕ УСТРОЙСТВА</Nav.Link>
            <Nav.Link href="#features">ТВ И АУДИО</Nav.Link>
            <Nav.Link href="#pricing">ДЛЯ ДОМА</Nav.Link>
            <Nav.Link href="#pricing">IT</Nav.Link>
          </Nav>
        </Navbar.Collapse>  

        <Navbar.Brand href="#home">
          <Image
            src="https://img.global.news.samsung.com/ru/wp-content/uploads/2017/11/Samsung-logo.jpg"
            width="22%"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">  
          <Nav className="mr-auto">
            <Nav.Link href="#home">EXPLORE</Nav.Link>
            <Nav.Link href="#home">АКЦИИ</Nav.Link>
            <Nav.Link href="#home">ПОДДЕРЖКА</Nav.Link>
            <Nav.Link href="#home">БИЗНЕС</Nav.Link>
            <Nav.Link href="#home"><FontAwesomeIcon icon={faSearch}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Image
            src={imgUp}
            width="100%"
            className="d-inline-block align-top"
          />
      <h2 className="secondHeader">Условия акции</h2>
    </Container>
    );
  }
  
  export default Header;