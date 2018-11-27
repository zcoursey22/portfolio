import React, { Component } from 'react';
import './styles/Home.css';
import PopoutForm from './PopoutForm';

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

        <div id="navSection">
          <div>
            <img src="https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png"></img>
            <h4>About Me</h4>
            <p>You can find me exploring state and national parks in my spare time</p>
          </div>
          <div>
            <img src="https://cdn1.iconfinder.com/data/icons/seo-markiting/66/2-512.png"></img>
            <h4>My Work</h4>
            <p>I use React to build dynamic user interfaces for data-driven web apps</p>
          </div>
          <div>
            <img src="https://img.icons8.com/metro/1600/paper-plane.png"></img>
            <h4>Get Social</h4>
            <p>Send me a message if you're interested in working together on a project</p>
          </div>
        </div>

        <PopoutForm />
      </div>
    );
  }
}

export default Home;
