import React, { Component } from 'react';
import './styles/Contact.css';
import axios from 'axios';
import validator from 'email-validator';

class Contact extends Component {
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
    this.resetStyle = this.resetStyle.bind(this);
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
    const getParagraphStyle = () => {
      if (this.state.submitted && this.state.buttonVisible) {
        return 'show-and-slide-down';
      } else if (this.state.submitted && !this.state.buttonVisible) {
        return 'show-slid-up';
      } else {
        return 'hide';
      }
    }

    return (
      <div className="Contact">
        <button id="message-me" className={this.state.buttonVisible ? 'fade-in' : 'fade-out'} onClick={this.toggleForm.bind(this)}>MESSAGE ME</button>
        <p className={getParagraphStyle()}>
          Thanks for your inquiry! I'll get back to you as soon as possible.
        </p>
        <p style={{ display: this.state.buttonVisible ? 'none' : 'block' }} className={getParagraphStyle()}><span onClick={() => this.setState({ buttonVisible: true })} id="sendAnotherMessage">Want to send another message?</span></p>
        <div id="form" className={this.state.visible ? 'open-form' : 'close-form'}>
          <form>
            <img id="xButton" src="images/x.png" onClick={this.toggleForm.bind(this)}/>
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

export default Contact;
