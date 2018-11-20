import React, { Component } from 'react';
import './styles/Project.css';


/* TODO:
  - add button to close opened project
*/


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpenClick = this.handleOpenClick.bind(this);
  }

  handleOpenClick() {
    this.setState({
      open: true
    });
  }

  render() {
    const project = this.props.project;

    const imageStyle = {
      backgroundImage: `url(${project.image})`,
      height: this.state.open ? '30rem' : '15rem'
    }

    const style = {
      flexBasis: this.state.open ? '57rem' : '30rem',
    }

    return (
      <div className="Project" style={style}>
        <div id="image" style={imageStyle} onClick={this.handleOpenClick}></div>
        <div id="info">
          <h2 onClick={this.handleOpenClick}>{project.name}</h2>
          <p>{project.desc}</p>
          <a id="githubLink" href={project.github}><img src="../images/github-logo.png"></img></a>
          <a id="liveLink" style={{ display: project.link ? 'auto' : 'none' }} href={project.link} target="_blank" rel="noopener noreferrer">See demo</a>
        </div>
        {/*<ul id="techList">
          {
            project.tech.map((tech, index) => {
              return <li key={`tech${index}`} className={`tech ${tech}`}>{tech}</li>
            })
          }
        </ul>*/}
      </div>
    );
  }
}

export default Project;
