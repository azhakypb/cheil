import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import UpperHeader from './components/UpperHeader'
import AfterHeader from './components/AfterHeader'
import MidIcon from './components/MidIcon'
import BottomEnd from './components/BottomEnd'
import { Button, Form} from 'react-bootstrap';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phone: '',
  };
}

handleFullName = event => {
  this.setState({
    fullName: event.target.value
  });
}
handleEmail = event => {
  this.setState({
    email: event.target.value
  });
}
handlePhone = event => {
  this.setState({
    phone: event.target.value
  });
}

handleSubmit = event => {
  event.preventDefault();

  const { fullName, email, phone } = this.state;

  const user = {
      fullName: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone,
  };

  axios
    .post('http://localhost:8000/create', user)
    .then(() => console.log('Data Created'))
    .catch(err =>{
      console.error(err);
    });
    event.target.reset()
  };
    render() {
        return (
          <div>
            <UpperHeader></UpperHeader>
            <AfterHeader></AfterHeader>
            <MidIcon></MidIcon>
            <Form className="validForm" onSubmit={this.handleSubmit.bind(this)}>
              <Form.Group controlId="formGroupName">
                  <Form.Label>ФИО</Form.Label>
                  <Form.Control onChange={this.handleFullName} value={this.name} type="name" placeholder="Имя Фамилия Отчество" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Ваш email</Form.Label>
                <Form.Control onChange={this.handleEmail} value={this.email} type="email" placeholder="example@exp.ex" />
              </Form.Group>
              <Form.Group controlId="formGroupPhone">
                <Form.Label>Номер телефона</Form.Label>
                <Form.Control onChange={this.handlePhone} value={this.phone} type="phone" placeholder="+7 777 7777" />
              </Form.Group>
              <Button type="submit" variant="outline-dark bt1 bt2">ОТПРАВИТЬ ДАННЫЕ</Button>
            </Form>
            <BottomEnd></BottomEnd>
            <p className="App-intro">{this.state.apiResponse}</p>
          </div>
        );
    }
}

export default App;