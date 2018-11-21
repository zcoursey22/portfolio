import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <div className="mainContent">
            <header>
              <h1>ZACH COURSEY</h1>
              <h2>FULLSTACK WEB DEVELOPER</h2>
            </header>
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route path="/about" component={ About }/>
              <Route path="/projects" component={ Projects }/>
              <Route path="/contact" component={ Contact }/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
