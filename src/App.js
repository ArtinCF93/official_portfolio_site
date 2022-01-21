import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { SliderGreenboxData } from './components/SliderGreenboxData';
import { RSFSData } from './components/RSFSData';
import { SliderRestAPIData } from './components/SliderRestAPIData';
import './App.css';

import NavBar from './components/nav-view';
import LandView from './components/landing-view';
import WorkView from './components/work-view';
import FooterView from './components/footer-view';
import RSFSView from './components/fs19-view';
import GreenBoxView from './components/greenbox-view_2';
import PolitiselfView from './components/politiself-view';
import RestAPIView from './components/restAPI-view';

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
          <Route path='/f19RSwork'>
            <RSFSView slides={RSFSData}/>
          </Route>
          <Route path='/greenbox'>
            <GreenBoxView slides={SliderGreenboxData}/>
          </Route>
          <Route path='/politiself'>
            <PolitiselfView />
          </Route>
          <Route path='/restAPI'>
            <RestAPIView slides={SliderRestAPIData}/>
          </Route>
        </Switch>
        <FooterView />
      </div>
      </Router>
    );
  }
}

export default App
