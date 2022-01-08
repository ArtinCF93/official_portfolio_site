import React from 'react';
import github from '../files/github.svg';
import linkedin from '../files/linkedin.svg';
import './footer-view.css';


class FooterView extends React.Component {

  render() {

    return(
    <div>
        <footer className="page_footer">
            <p>Find me on</p>
            <div>
                <a href='https://github.com/ArtinCF93' target='blank'><img src={github} alt="Github" className='github'/></a>
                <a href='https://www.linkedin.com/in/artin-azimi-54bb65132/' target='blank'><img src={linkedin} alt="Linkedin" /></a>
            </div>
    </footer>
    </div>
    );
  }
}

export default FooterView