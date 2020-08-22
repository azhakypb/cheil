import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import icon1 from './icon 1.png'
import icon2 from './icon 2.png'
import icon3 from './icon 3.png'
import footer_img from './IMG.png'
import components_img from './components.png'
import { faSearch, faCircle } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

function Header() {
  return ( 
    <Container fluid>
      <Navbar bg="light header" expand="lg">
          <Nav className="mr-auto">
            <Nav.Link href="#home">МОБИЛЬНЫЕ УСТРОЙСТВА</Nav.Link>
            <Nav.Link href="#features">ТВ И АУДИО</Nav.Link>
            <Nav.Link href="#pricing">ДЛЯ ДОМА</Nav.Link>
            <Nav.Link href="#pricing">IT</Nav.Link>
          </Nav>

        <div class="text-center sams"><Navbar.Brand href="#home">
          <Image
            src="https://img.global.news.samsung.com/ru/wp-content/uploads/2017/11/Samsung-logo.jpg"
            width="22%"
            className="d-inline-block align-top"
          />
        </Navbar.Brand></div>

    
          <Nav className="mr-auto">
            <Nav.Link href="#home">EXPLORE</Nav.Link>
            <Nav.Link href="#home">АКЦИИ</Nav.Link>
            <Nav.Link href="#home">ПОДДЕРЖКА</Nav.Link>
            <Nav.Link href="#home">БИЗНЕС</Nav.Link>
            <Nav.Link href="#home"><FontAwesomeIcon icon={faSearch}/></Nav.Link>
          </Nav>
       
      </Navbar>
      <Jumbotron className="upImage" fluid>
        <h1 className="upText1">Выбери Galaxy A</h1>
        <h3 className="upText2">Получи вкусный подарок с доставкой на дом!</h3>
        <h5 className="upText3">Купи смартфон серии Galaxy A. <br></br>Получи промо-код на 5000 или 7000 тенге в приложении Glovo.<br></br> Период акции с 20 апреля по 26 апреля 2020 года</h5>
        <Container>
        <Row>
        <Col lg={3}>
          </Col>
          <Col lg={3}>
          <div class="text-center">
          <Button variant="outline-dark bt1">Регистрация</Button>
          </div>
          </Col>
          <Col lg={3}>
          <div class="text-center">
          <Button variant="link bt1 underL">Узнать больше</Button>
          </div>
          </Col>
          <Col lg={3}>
          </Col>

          
        </Row>
        </Container>
        
      </Jumbotron>
      <h2 className="secondHeader">Условия акции</h2>
      <Container>
        <Row>
          <Col sm={4}>
            <div class="icon-style">
            <Image src={icon1}/>
            </div>
            
            <p class="text-center bt1">Купи смартфон А-серии из списка ниже в магазинах офийиальных партнеров Samsung</p>
          </Col>
          {/* <Col sm={3}>
              <FontAwesomeIcon className="dot" icon={faCircle}/>          
          </Col> */}
          
          <Col sm={4}>
          <div class="icon-style">
            <Image src={icon2}/>
            </div>
            <p class="text-center bt1">Зарегистрируй чек покупки на сайте, прикрепив его фото</p>
          </Col>
          {/* <Col sm={3}>
            <FontAwesomeIcon className="dot" icon={faCircle}/>
          </Col> */}
          
          <Col sm={4}>
          <div class="icon-style">
            <Image src={icon3}/>
            </div>
            <p class="text-center bt1">Получи промо-код на 5000 или 7000 тенге в в</p>
          </Col>
        </Row>
      </Container>
      
      <div class="button-style"><Button variant="outline-dark bt2">ПОЛНЫЕ ПРАВИЛА</Button></div>
      <h2 className="thirdHeader">Доставка Glovo доступна в трех городах: Нур-Султан, Алматы и Шымкент</h2>
      <h2 className="secondHeader">Регистрация</h2>
      <h2 className="thirdHeader">Заполни форму ниже и участвуй в розыгрыше призов</h2>

      <form class="validForm">
      <div class="form-group">
          <label for="fullName">ФИО</label>
          <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
        </div>
        <div class="form-group">
          <label for="mail">Ваш email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for="phone">Телефон</label>
          <input type="tel" class="form-control"/>
        </div>
        <div class="text-center"><Button variant="outline-dark bt1 bt2">ОТПРАВИТЬ ДАННЫЕ</Button></div>
      </form>
      
      <h2 className="secondHeader"><p>Модель смартфонов, <br></br> участвующие в Акции</p></h2>
      <Container>
      <div class='text-center lastTable'>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Модель</th>
            <th scope="col">Сумма промо-кода</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Galaxy-A51</th>
            <td>5,000 тенге</td>
          </tr>
          <tr>
            <th scope="row">Galaxy-A70</th>
            <td>5,000 тенге</td>
          </tr>
          <tr>
            <th scope="row">Galaxy-A71</th>
            <td>7,000 тенге</td>
          </tr>
        </tbody>
      </table>
      </div>
      </Container>
      
      <div class="text-center"><Button variant="outline-dark bt1 bt2">Подробнее</Button></div>
      <div class="text-center">
      <Image src={footer_img}/>

      </div>
      
      <h2 className="secondHeader"><p>В акции участвуют точки продаж официальных <br></br>партнеров Samsung</p></h2>
      <h2 className="thirdHeader">Выбери нужный из списка магазинов в твоем городе</h2>
      <div class="text-center">
      <Image src={components_img}/>

      </div>
    </Container>
    );
  }
  
  export default Header;