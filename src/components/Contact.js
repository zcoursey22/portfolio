import React, { Component } from 'react';
import './styles/Contact.css';

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
    });
  }

  render() {
    return (
      <div className="Contact">
        <p>
          I'm currently looking for new oppurtunities and would love to hear from you.
          Feel free to get in contact.
        </p>
        <button id="message-me" className={this.state.visible ? 'fade-out' : 'fade-in'} onClick={this.toggleForm.bind(this)}>MESSAGE ME</button>
        <div id="form" className={this.state.visible ? 'open-form' : 'close-form'}>
          <form>
            <img src="images/x.png" onClick={this.toggleForm.bind(this)}/>
            <label>NAME</label>
            <input></input>
            <label>EMAIL</label>
            <input></input>
            <label>MESSAGE</label>
            <textarea></textarea>
            <input type="submit" value="SUBMIT"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
