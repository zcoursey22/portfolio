import React, { Component } from 'react';
import './styles/Project.css';


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOpenClick = this.handleOpenClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);

    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if(this.node.contains(e.target)) {
      return;
    }
    setTimeout(this.handleCloseClick, 100);
  }

  handleOpenClick() {
    this.setState({
      open: true
    });
  }

  handleCloseClick() {
    this.setState({
      open: false
    });
  }

  render() {
    const project = this.props.project;

    const imageStyle = {
      backgroundImage: `url(${project.image})`,
      height: this.state.open ? '29rem' : '14.5rem',
      cursor: this.state.open ? 'auto' : 'pointer'
    }

    const projectStyle = {
      flexBasis: this.state.open ? '57rem' : '29rem',
      transform: this.state.open ? 'none' : ''
    }

    const closeButtonStyle = {
      visibility: this.state.open ? 'visible' : 'hidden',
      clickEvents: this.state.open ? '' : 'none',
    }

    return (
      <div className="Project" ref={node => this.node = node} style={projectStyle}>
        <div id="image" alt={`Screenshot of ${project.name}`} style={imageStyle} onClick={this.handleOpenClick}></div>
        <div id="info">
          <h2>{project.name}</h2>
          <p>{project.desc}</p>
          <a id="githubLink"  target="_blank" rel="noopener noreferrer" href={project.github}><img alt={`Github logo linking to my repo for ${project.name}`} src="../images/github-logo.png"></img></a>
          <a id="liveLink" style={{ display: project.link ? 'auto' : 'none' }} href={project.link} target="_blank" rel="noopener noreferrer">See demo</a>
        </div>
        {/*<ul id="techList">
          {
            project.tech.map((tech, index) => {
              return <li key={`tech${index}`} className={`tech ${tech}`}>{tech}</li>
            })
          }
        </ul>*/}
        <img id="closeProjectButton" style={closeButtonStyle} onClick={this.handleCloseClick} alt="Button to close the project" src="../images/x.png"></img>
      </div>
    );
  }
}

export default Project;
