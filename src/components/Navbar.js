import React, { Component } from 'react';
import './styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul>
          <img alt="Headshot of me" src="https://avatars2.githubusercontent.com/u/29624831?s=460&v=4" />
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">PROJECTS</a></li>
          <li><a href="#">CONTACT</a></li>
          <div>
            <a target="_blank" href="https://github.com/zcoursey22"><img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/github_social_media_logo-512.png" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/zach-coursey/"><img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_linked_in-512.png" /></a>
            <a target="_blank" href="https://twitter.com/zcoursey22"><img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_twitter-512.png" /></a>
          </div>
          <p>&copy; COPYRIGHT 2018</p>
        </ul>
      </div>
    );
  }
}

export default Navbar;
