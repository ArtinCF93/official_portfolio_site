import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Fragment } from 'react-router-dom';
import './App.css';

import NavBar from './components/nav-view';
import LandView from './components/landing-view';
import FooterView from './components/footer-view';
import RSFSView from './components/fs19-view';
import AboutView from './components/about-view';


class App extends Component {

  render() {

    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandView />} />
            <Route path="/myworks/f19RSwork" element={<RSFSView />} />
            <Route path="/about" element={ <AboutView /> } />
        </Routes>
        <FooterView />
      </Router>
    {/* test */}
      </div >
    );
  }
}

export default App
