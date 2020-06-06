import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App(props) {
  return <div>Hello React by <strong>{props.name}</strong><h1>Marks are {props.marks + 5} inside div</h1></div>
}

export default App;
