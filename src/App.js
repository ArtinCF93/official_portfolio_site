import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { SliderRestAPIData } from './components/SliderRestAPIData';
import './App.css';

import NavBar from './components/nav-view';
import LandView from './components/landing-view';
import GDWork from './components/gdwork-view';
import DevWork from './components/devwork-view';
import FooterView from './components/footer-view';
import RSFSView from './components/fs19-view';
import GreenBoxView from './components/greenbox-view';
import PolitiselfView from './components/politiself-view';
import RestAPIView from './components/restAPI-view';

class App extends Component {

  render() {

    return (
      <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <LandView />
          </Route>
          <Route exact path='/myworks/GDworks'>
            <GDWork />
          </Route>
          <Route exact path='/myworks/GDworks/f19RSwork'>
            <RSFSView />
          </Route>
          <Route exact path='/myworks/GDworks/greenbox'>
            <GreenBoxView />
          </Route>
          <Route exact path='/myworks/politiself'>
            <PolitiselfView />
          </Route>
          <Route exact path='/restAPI'>
            <RestAPIView slides={SliderRestAPIData}/>
          </Route>
          </Switch>
        <FooterView />
      </Router>
      </div>
    );
  }
}

export default App
