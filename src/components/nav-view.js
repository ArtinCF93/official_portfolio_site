import React from 'react';
import { Link } from 'react-router-dom';
import my_logo from '../files/my_logo.png'

import './nav-view.css'

class NavBar extends React.Component {

  render() {

    return(
    <div>
    <header>
    <img src={my_logo} className="logo" alt="logo" />
        <nav>
            <ul role="menubar">
                <li>
                    <Link to='/' className="menuitem">Home</Link>
                </li>
                <li>
                    <a href="/#expertise" role="menuitem" className="menuitem">About</a>
                </li>
                <li>
                    <Link to='/myworks' className="menuitem">My Works</Link>
                </li>
                <li>
                    <Link to='/contact' className="menuitem">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
    </div>
    );
  }
}

export default NavBar