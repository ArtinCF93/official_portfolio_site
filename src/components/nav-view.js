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
                            <Link to='/myworks' className="nav-links">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
// import React from 'react';
// import { Link } from 'react-router-dom';
// import my_logo from '../files/my_logo.png'

// import './nav-view.css'

// class NavBar extends React.Component {

//   render() {

//     return(
//     <div>
//     <header>
//     <img src={my_logo} className="logo" alt="logo" />
//         <nav>
//             <ul role="menubar">
//                 <li>
//                     <Link to='/' className="menuitem">Home</Link>
//                 </li>
//                 <li>
//                     <a href="/#expertise" className="menuitem">About</a>
//                 </li>
//                 <li>
//                     <Link to='/myworks' className="menuitem">My Works</Link>
//                 </li>
//                 <li>
//                     <a href="/#contact" className="menuitem">Contact</a>
//                 </li>
//             </ul>
//         </nav>
//     </header>
//     </div>
//     );
//   }
// }

// export default NavBar