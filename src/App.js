import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from './components/nav-view';
import LandView from './components/landing-view';
import WorkView from './components/work-view';
import FooterView from './components/footer-view';

class App extends Component {

  render() {

    return (
      <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <LandView />
          </Route>
          <Route path='/myworks'>
            <WorkView />
          </Route>
        </Switch>
        <FooterView />
      </div>
      </Router>
    );
  }
}

export default App
