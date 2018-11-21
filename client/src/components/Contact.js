import React, { Component } from 'react';
import './styles/Contact.css';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
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
          document.querySelectorAll("input").forEach(input => input.value = '');
          document.querySelector("textarea").value = '';
        }, 200);
      }
    });
  }

  submitForm() {
    axios.post('/api/postTest', {
      name: 'Zach',
      email: 'zcoursey22',
      message: 'This is a test message'
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Contact">
        <button id="message-me" className={this.state.visible ? 'fade-out' : 'fade-in'} onClick={this.toggleForm.bind(this)}>MESSAGE ME</button>
        <div id="form" className={this.state.visible ? 'open-form' : 'close-form'}>
          <form>
            <img src="images/x.png" onClick={this.toggleForm.bind(this)}/>
            <label>NAME</label>
            <input id="nameInput"></input>
            <label>EMAIL</label>
            <input></input>
            <label>MESSAGE</label>
            <textarea></textarea>
            <input type="submit" value="SUBMIT" onClick={this.submitForm.bind(this)}></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
