import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Fragment } from 'react-router-dom';
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
import AboutView from './components/about-view';
import ContactView from './components/contact-view';

class App extends Component {

  render() {

    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandView />} />
            <Route path="/myworks/GDworks" element={<GDWork />} />
            <Route path="/myworks/GDworks/f19RSwork" element={<RSFSView />} />
            <Route path="/myworks/GDworks/greenbox" element={<GreenBoxView />} />
            <Route path="/myworks/politiself" element={<PolitiselfView />} />
            <Route path="/myworks/devworks" element={<DevWork />} />
            <Route path="/myworks/devworks/restAPI" element={<RestAPIView />} />
            <Route path="/about" render={() => <><AboutView /> <ContactView /></> }
            />
        </Routes>
        <FooterView />
      </Router>
    {/* test */}
      </div >
    );
  }
}

export default App
