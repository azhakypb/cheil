import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';


const AfterHeader = () => (
    <Jumbotron className="upImage" fluid>
        <h1 className="upText1">Выбери Galaxy A</h1>
        <h3 className="upText2">Получи вкусный подарок с доставкой на дом!</h3>
        <h5 className="upText3">Купи смартфон серии Galaxy A. <br></br>Получи промо-код на 5000 или 7000 тенге в приложении Glovo.<br></br> Период акции с 20 апреля по 26 апреля 2020 года</h5>
        <Container>
        <Row>
        <Col lg={3}>
          </Col>
          <Col lg={3}>
          <div className="text-center">
          <Button variant="outline-dark bt1">Регистрация</Button>
          </div>
          </Col>
          <Col lg={3}>
          <div className="text-center">
          <Button variant="link bt1 underL">Узнать больше</Button>
          </div>
          </Col>
          <Col lg={3}>
          </Col>

          
        </Row>
        </Container>
        
      </Jumbotron>
)

export default AfterHeader;