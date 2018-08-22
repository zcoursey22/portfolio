import React, { Component } from 'react';
import './styles/App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="mainContent">
          <header>
            <h1>ZACH COURSEY</h1>
            <h2>FULLSTACK WEB DEVELOPER</h2>
          </header>
          <div className="mainText">
            <p>Welcome to my portfolio!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
