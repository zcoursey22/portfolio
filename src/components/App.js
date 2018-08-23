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
            <p>
              Welcome to my portfolio!
            </p>
            <p>
              I'm a software engieer focused on building clean, modern UI for everyone to enjoy.
              Have a look around and if you like what you see, let's work together!
            </p>
            <p>
              I'm currently looking for new oppurtunities and would love to hear from you.
              Feel free to get in contact.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
