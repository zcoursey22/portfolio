import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

class Navbar extends Component {
  render() {
    const activePageStyle = {
      color: '#7bad8b'
    };

    return (
      <div className="Navbar">
        <ul>
          {/*<img alt="Headshot of me" src="images/headshot2.jpg" />*/}
          <li><NavLink exact to="/" activeStyle={activePageStyle}>HOME</NavLink></li>
          <li><NavLink to="/about" activeStyle={activePageStyle}>ABOUT</NavLink></li>
          <li><NavLink to="/projects" activeStyle={activePageStyle}>PROJECTS</NavLink></li>
          <li><NavLink to="/contact" activeStyle={activePageStyle}>CONTACT</NavLink></li>
          <div className="socialMedia">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/zcoursey22"><img alt="Github icon, links to my Github account" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/github_social_media_logo-512.png" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zach-coursey/"><img alt="LinkedIn icon, links to my LinkedIn account" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_linked_in-512.png" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/zcoursey22"><img alt="Twitter icon, links to my Twitter account" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_twitter-512.png" /></a>
          </div>
          <div className="resume"><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1bN-ro6O90_Ito-uQaKaU5sO-4Jot6eNE/view?usp=sharing">-RESUME-</a></div>
          <p id="developedByMe">DESIGNED + DEVELOPED BY ME</p>
          <p id="copyrightLicense">&copy; COPYRIGHT {new Date().getYear() + 1900}</p>
        </ul>
      </div>
    );
  }
}

export default Navbar;
