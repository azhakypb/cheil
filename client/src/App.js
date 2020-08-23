import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import UpperHeader from './components/UpperHeader'
import AfterHeader from './components/AfterHeader'
import MidIcon from './components/MidIcon'
import BottomEnd from './components/BottomEnd'
import { Button, Form} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          apiResponse: "",
          name: "",
          email: "",
          phone: "" 
        }
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.sendAPI = this.sendAPI.bind(this);
    }
    handleName (event) {
      this.setState({name: event.target.value}
        );
       // console.log('Form data', this.state.name)
    }
    handleEmail (event) {
      this.setState({email: event.target.value}
        );
       // console.log('Form data', this.state.email)
    }
    handlePhone (event) {
      this.setState({phone: event.target.value}
        );
       // console.log('Form data', this.state.phone)
    }
    sendAPI() {
     // console.log('Form data', this.state.name, this.state.email, this.state.phone)
    }

    // callAPI() {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }))
    //         .catch(err => err);
    // }

    // componentDidMount() {
    //     this.callAPI();
    // }

    render() {
        return (
          <div>
            <UpperHeader></UpperHeader>
            <AfterHeader></AfterHeader>
            <MidIcon></MidIcon>
            <Form className="validForm">
              <Form.Group controlId="formGroupName">
                  <Form.Label>ФИО</Form.Label>
                  <Form.Control onChange={this.handleName} value={this.state.name} type="name" placeholder="Имя Фамилия Отчество" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Ваш email</Form.Label>
                <Form.Control onChange={this.handleEmail} value={this.state.email} type="email" placeholder="example@exp.ex" />
              </Form.Group>
              <Form.Group controlId="formGroupPhone">
                <Form.Label>Номер телефона</Form.Label>
                <Form.Control onChange={this.handlePhone} value={this.state.phone} type="phone" placeholder="+7 777 7777" />
              </Form.Group>
              <Button type="submit" onSubmit={this.sendAPI} variant="outline-dark bt1 bt2">ОТПРАВИТЬ ДАННЫЕ</Button>
            </Form>
            <BottomEnd></BottomEnd>
            <p className="App-intro">{this.state.apiResponse}</p>
          </div>
        );
    }
}

export default App;