import React, { Component } from 'react';
import './styles/Contact.css';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      name: '',
      email: '',
      message: ''
    }
  }

  toggleForm() {
    this.setState({
      visible: !this.state.visible,
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
    this.clearForm();
    this.toggleForm();
    axios.post('/api/postTest', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
    return (
      <div className="Contact">
        <button id="message-me" className={this.state.visible ? 'fade-out' : 'fade-in'} onClick={this.toggleForm.bind(this)}>MESSAGE ME</button>
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
