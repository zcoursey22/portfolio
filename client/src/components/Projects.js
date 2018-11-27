import React, { Component } from 'react';
import './styles/Projects.css';
import Project from './Project';
import PopoutForm from './PopoutForm';
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
        <PopoutForm />
      </div>
    );
  }
}

export default Projects;
