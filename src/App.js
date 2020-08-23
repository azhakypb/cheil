import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import UpperHeader from './components/UpperHeader';
import AfterHeader from './components/AfterHeader';
import MidIcon from './components/MidIcon';
import BottomEnd from './components/BottomEnd';
import ValidationForm from './components/ValidationForm';

function App() {
  return (
    <div className="App">
       <UpperHeader/>
       <AfterHeader/>
       <MidIcon/>
       <ValidationForm/>
       <BottomEnd/>
    </div>
  );
}

export default App;
