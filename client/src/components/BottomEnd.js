import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import components_img from './components.png'
import footer_img from './IMG.png'


const BottomEnd = () => (
    <div>
        <h2 className="secondHeader"><p>Модель смартфонов, <br></br> участвующие в Акции</p></h2>
        <Container>
            <div className='text-center lastTable'>
                <table className="table">
                    <thead className="thead-light">
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
    
        <div className="text-center"><Button variant="outline-dark bt1 bt2">Подробнее</Button></div>
        <div className="text-center"><Image src={footer_img}/></div>
        <h2 className="secondHeader"><p>В акции участвуют точки продаж официальных <br></br>партнеров Samsung</p></h2>
        <h2 className="thirdHeader">Выбери нужный из списка магазинов в твоем городе</h2>
        <div className="text-center"><Image src={components_img}/></div>
    </div>
)

export default BottomEnd;