import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import './Header.css'

function Header() {
    return (
        <Navbar bg="white" variant="light">
        <Nav className="mr-auto left">
          <Nav.Link href="#home">МОБИЛЬНЫЕ УСТРОЙСТВА</Nav.Link>
          <Nav.Link href="#features">ТВ И АУДИО</Nav.Link>
          <Nav.Link href="#pricing">ДЛЯ ДОМА</Nav.Link>
          <Nav.Link href="#pricing">IT</Nav.Link>
        </Nav>
        <Image className="Samsung-icon" src="https://img.global.news.samsung.com/ru/wp-content/uploads/2017/11/Samsung-logo.jpg" fluid />
        {/* samsung icon */}
        <Nav className="mr-auto right">
        <Nav.Link href="#home">EXPLORE</Nav.Link>
        <Nav.Link href="#home">АКЦИИ</Nav.Link>
        <Nav.Link href="#home">ПОДДЕРЖКА</Nav.Link>
        <Nav.Link href="#home">БИЗНЕС</Nav.Link>
        {/* ADD SEARCH ICON */}
        </Nav>
      </Navbar>
    );
  }
  
  export default Header;