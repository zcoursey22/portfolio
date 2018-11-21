import React, { Component } from 'react';
import './styles/Contact.css';
import axios from 'axios';

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
            <img src="images/x.png" onClick={this.toggleForm.bind(this)}/>
            <label>NAME</label>
            <input id="nameInput" onChange={(e) => this.setState({ name: e.target.value })}></input>
            <label>EMAIL</label>
            <input onChange={(e) => this.setState({ email: e.target.value })}></input>
            <label>MESSAGE</label>
            <textarea onChange={(e) => this.setState({ message: e.target.value })}></textarea>
            <button type="button" onClick={this.submitForm.bind(this)}>SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
