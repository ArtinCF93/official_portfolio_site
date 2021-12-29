import React from 'react';
import github from '../files/github.svg';
import linkedin from '../files/linkedin.svg';
import twitter from '../files/twitter.png';
import './footer-view.css';


class FooterView extends React.Component {

  render() {

    return(
    <div>
        <footer className="page_footer">
            <p>Find me on</p>
            <div className="socailmedia_icons">
                <img src={github} alt="Github" />
                <img src={linkedin} alt="Linkedin" />
                <img src={twitter} className='twitter' alt="Twitter" />
            </div>
    </footer>
    </div>
    );
  }
}

export default FooterView