import React, { Component } from 'react';
import './styles/Home.css';
import axios from 'axios';
import validator from 'email-validator';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      submitted: false,
      buttonVisible: true,
      name: '',
      email: '',
      message: ''
    }
  }

  toggleForm() {
    if (this.state.submitted && this.state.buttonVisible) {
      this.setState({ submitted: false });
    }
    this.setState({
      visible: !this.state.visible,
      buttonVisible: this.state.submitted ? false : !this.state.buttonVisible
    }, () => {
      if (this.state.visible) {
        setTimeout(() => {
          document.querySelector("#nameInput").focus();
        }, 300);
      } else {
        setTimeout(() => {
          this.clearForm();
        }, 200);
      }
    });
  }

  validateForm() {
    const removeWhiteSpace = (str) => {
      return str.split(' ').join('');
    }

    const validateName = () => {
      let valid = true;
      if (removeWhiteSpace(this.state.name) === '') {
        valid = false;
        document.querySelector("#nameInput").style.background = '#ffdfea';
        document.querySelector("#nameInput").style.border = '2px solid #b66';
        document.querySelector("#nameInput").placeholder = 'Enter your name';
      }
      return valid;
    }

    const validateEmail = () => {
      let valid = true;
      if (removeWhiteSpace(this.state.email) === '') {
        valid = false;
        document.querySelector("#emailInput").style.background = '#ffdfea';
        document.querySelector("#emailInput").style.border = '2px solid #b66';
        document.querySelector("#emailInput").placeholder = 'Enter your email address';
      } else if (!validator.validate(this.state.email)) {
        valid = false;
        document.querySelector("#emailInput").value = '';
        document.querySelector("#emailInput").style.background = '#ffdfea';
        document.querySelector("#emailInput").style.border = '2px solid #b66';
        document.querySelector("#emailInput").placeholder = 'Email address invalid';
      }
      return valid;
    }

    const validateMessage = () => {
      let valid = true;
      if (removeWhiteSpace(this.state.message) === '') {
        valid = false;
        document.querySelector("textarea").style.background = '#ffdfea';
        document.querySelector("textarea").style.border = '2px solid #b66';
        document.querySelector("textarea").placeholder = 'Please enter a message';
      }
      return valid;
    }

    let formValid = true;
    if (validateName() === false) formValid = false;
    if (validateEmail() === false) formValid = false;
    if (validateMessage() === false) formValid = false;
    if (formValid) this.submitForm();
  }

  submitForm() {
    this.setState({
      submitted: true
    }, () => {
      axios.post('/api/postTest', {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      this.clearForm();
      this.toggleForm();
    });
  }

  clearForm() {
    this.setState({
      name: '',
      email: '',
      message: ''
    });
    document.querySelectorAll("input").forEach(input => input.value = '');
    document.querySelector("textarea").value = '';
    this.resetAllStyles();
  }

  resetStyle(e) {
    e.target.style.background = '#444';
    e.target.style.border = '2px solid #111';
    e.target.placeholder = '';
    if (e.target.id === 'emailInput') e.target.value = this.state.email;
  }

  resetAllStyles() {
    document.querySelector("#nameInput").style.background = '#444';
    document.querySelector("#nameInput").style.border = '2px solid #111';
    document.querySelector("#nameInput").placeholder = '';
    document.querySelector("#emailInput").style.background = '#444';
    document.querySelector("#emailInput").style.border = '2px solid #111';
    document.querySelector("#emailInput").placeholder = '';
    document.querySelector("textarea").style.background = '#444';
    document.querySelector("textarea").style.border = '2px solid #111';
    document.querySelector("textarea").placeholder = '';
  }


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

        <div id="sendMessageButton" className={this.state.buttonVisible ? 'fade-in' : 'fade-out'} onClick={this.toggleForm.bind(this)}>
          <div id="sendMessageButtonInnerBorder"><img src="images/chat1.png"></img></div>
        </div>

        <div id="form" className={this.state.visible ? 'open-form' : 'close-form'}>
          <form>
            <img id="xButton" alt="Button to close form" src="images/x.png" onClick={this.toggleForm.bind(this)}/>
            <label>NAME</label>
            <input id="nameInput" onClick={(e) => this.resetStyle(e)} onChange={(e) => this.setState({ name: e.target.value })}></input>
            <label>EMAIL</label>
            <input id="emailInput" onClick={(e) => this.resetStyle(e)} onChange={(e) => this.setState({ email: e.target.value })}></input>
            <label>MESSAGE</label>
            <textarea onClick={(e) => this.resetStyle(e)} onChange={(e) => this.setState({ message: e.target.value })}></textarea>
            <button type="button" onClick={this.validateForm.bind(this)}>SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
