import React, { Component } from 'react';
import './styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul>
          <img alt="Headshot of me" src="images/headshot2.jpg" />
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">PROJECTS</a></li>
          <li><a href="#">CONTACT</a></li>
          <div className="socialMedia">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/zcoursey22"><img alt="Github icon, links to my Github account" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/github_social_media_logo-512.png" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zach-coursey/"><img alt="LinkedIn icon, links to my LinkedIn account" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_linked_in-512.png" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/zcoursey22"><img alt="Twitter icon, links to my Twitter account" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_twitter-512.png" /></a>
          </div>
          <div className="resume"><a target="_blank" rel="noopener noreferrer" href="#">RESUME</a></div>
          <p>&copy; COPYRIGHT 2018</p>
        </ul>
      </div>
    );
  }
}

export default Navbar;
