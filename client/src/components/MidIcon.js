import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import icon1 from './icon 1.png'
import icon2 from './icon 2.png'
import icon3 from './icon 3.png'

const MidIcon = () => (
    <div>
        <h2 className="secondHeader">Условия акции</h2>
      <Container>
        <Row>
          <Col sm={4}>
            <div class="icon-style">
            <Image src={icon1}/>
            </div>
            
            <p class="text-center bt1">Купи смартфон А-серии из списка ниже в магазинах офийиальных партнеров Samsung</p>
          </Col>  
          <Col sm={4}>
          <div class="icon-style">
            <Image src={icon2}/>
            </div>
            <p class="text-center bt1">Зарегистрируй чек покупки на сайте, прикрепив его фото</p>
          </Col>
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
    </div>
)

export default MidIcon;