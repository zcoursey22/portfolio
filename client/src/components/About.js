import React, { Component } from 'react';
import './styles/About.css';
import PopoutForm from './PopoutForm';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div style={{ backgroundImage: 'url("images/floridaBanner.jpg")' }} id="bannerImage"></div>
        <div id="currentLocation">
          <img alt="location pin" src="images/locationPin.png"></img>
          <h3>Gainesville, FL</h3>
        </div>
        <PopoutForm />
      </div>
    );
  }
}

export default About;
