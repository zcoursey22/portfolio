import React, { Component } from 'react';
import './styles/About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div id="bannerImage"></div>
        <div id="currentLocation">
          <img src="https://www.freeiconspng.com/uploads/red-location-icon-1.png"></img>
          <h3>Gainesville, FL</h3>
        </div>
      </div>
    );
  }
}

export default About;
