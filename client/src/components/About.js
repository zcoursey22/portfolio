import React, { Component } from 'react';
import './styles/About.css';
import PopoutForm from './PopoutForm';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div id="imageContainer">
          <img src="images/headshot2.jpg"></img>
        </div>

        <div id="currentLocation">
          <img alt="location pin" src="images/locationPin.png"></img>
          <h3>Jacksonville, FL</h3>
        </div>

        <div id="textContainer">
          <p>
            When I first discovered programming I was overwhelmed by the sense of accomplishment I got from making a computer do what I wanted it to do. Coding simple games, even debugging became a joy for me. I think every developer has felt it at one point: the need to improve. Whether it be your skills, your code, your understanding, software development is about failing so many times you couldn't possibly fail in the same situation ever again.
          </p>
          <p>
            Learning new things is what makes me love this field and since starting I've used C# in the Unity game engine, Python, and JavaScript in many different forms and frameworks. My current favorite tool to use with JavaScript is React with Redux. If I'm building out a back end, I'll most likely be using Node.js and Express. Another technology I love is D3 for its captivating, complex data visualization capabilities.
          </p>
          <p>
            I enjoy developing clean, modern user interfaces that anyone(even my dad) can understand and interact with flawlessly. In my opinion, a simple UI/UX can be much more effective than an overly complex wall of dropdowns and gaudy graphics. However, non overwhelming UI doesn't mean a lack of information and I would frame my philosophy on data-driven web apps as a mix of less is more and short and to the point.
          </p>
        </div>

        <PopoutForm />
      </div>
    );
  }
}

export default About;
