import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import my_logo from '../files/my_logo.png'
import './nav-view.css'

function NavBar() {

    let [navbar, unsetNavbar] = useState(false);

    let changeNav = () => {
        if(window.scrollY >= 20) {
            unsetNavbar(true);
        } else {
            unsetNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNav);
    
    return (
        <div className='nav'>
            <nav className={navbar ? 'navbar unactive' : 'navbar'}>
            <img src={my_logo} className="logo" alt="logo" />
                <div className='navbar-container'>
                    <ul  className='nav-menu'>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <a href="/#expertise" className="nav-links">My Work</a>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className="nav-links">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar