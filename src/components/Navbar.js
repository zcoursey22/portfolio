import React, { Component } from 'react';
import './styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul>
          <img src="https://avatars2.githubusercontent.com/u/29624831?s=460&v=4" />
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">PROJECTS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
