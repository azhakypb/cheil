import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import UpperHeader from './components/UpperHeader'
import AfterHeader from './components/AfterHeader'
import MidIcon from './components/MidIcon'
import ValidationForm from './components/ValidationForm'
import BottomEnd from './components/BottomEnd'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
          <div>
            <UpperHeader></UpperHeader>
            <AfterHeader></AfterHeader>
            <MidIcon></MidIcon>
            <ValidationForm></ValidationForm>
            <BottomEnd></BottomEnd>
            <p className="App-intro">{this.state.apiResponse}</p>
          </div>
        );
    }
}

export default App;