import React, { Component } from 'react';
import './styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div id="topSection">
          <h3>
            Welcome to my portfolio!
          </h3>
          <p>
            I'm a software engieer focused on building clean, modern UI for everyone to enjoy and building top notch experiences for data-driven web apps.
            Have a look around and if you like what you see, let's work together! I'm always open to new and exciting oppurtunities wherever they may lead so don't hesitate to reach out! Chances are I would love to hear from you.
          </p>
        </div>

        <div id="socialSection">

        </div>

        <div id="navSection">
          <div>
            <img src="images/x.png"></img>
            <h4>Me</h4>
          </div>
          <div>
            <img src="images/x.png"></img>
            <h4>My work</h4>
            <p>I use React to build dynamic user interfaces</p>
          </div>
          <div>
            <img src="images/x.png"></img>
            <h4>Get social</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
