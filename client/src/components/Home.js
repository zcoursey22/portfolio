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
            <h4>About Me</h4>
            <p>You can find me exploring state and national parks in my spare time</p>
          </div>
          <div>
            <img src="images/x.png"></img>
            <h4>My Work</h4>
            <p>I use React to build dynamic user interfaces for data-driven web apps</p>
          </div>
          <div>
            <img src="images/x.png"></img>
            <h4>Get Social</h4>
            <p>Send me a message if you're interested in working together on a project</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
