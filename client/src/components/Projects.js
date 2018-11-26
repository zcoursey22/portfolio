import React, { Component } from 'react';
import './styles/Projects.css';
import Project from './Project';
const projectData = require("../projectData.js");

class Projects extends Component {
  render() {

    const allProjects = projectData.map((project, index) => {
      return <Project key={'project' + index} project={project}/>
    });

    return (
      <div className="Projects">
        <div id="projectsContainer">
          {allProjects}
        </div>

        <div id="sendMessageButton">
          <div id="sendMessageButtonInnerBorder"><img src="images/chat1.png"></img></div>
        </div>
      </div>
    );
  }
}

export default Projects;
