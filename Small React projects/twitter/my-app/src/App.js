import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Components/Body.js';
import Fade from 'react-reveal/Fade';

const data = require('./data.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fade left cascade>
          <h1>A Simple Twitter Replication</h1>
        </Fade>
        <Fade left cascade>
          <h4>Hover over profile image and time icon to see more details</h4>
        </Fade>
        <Fade left>
        {data.map((item, index) => (
          <Body key={index} details={item}/>
        ))}
        </Fade>
        
      </div>
    );
  }
}

export default App;
