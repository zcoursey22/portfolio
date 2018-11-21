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
        <p>
          I'm a software engieer focused on building clean, modern UI for everyone to enjoy and building top notch experiences for data-driven web apps.
          Have a look around and if you like what you see, let's work together!
        </p>
      </div>
    );
  }
}

export default About;
