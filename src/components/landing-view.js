import React from 'react';
import { Link } from 'react-router-dom';
import backImg from '../files/website_background.jpg'
import resume from '../files/Design_Resume-1.pdf'
import GDWork from './gdwork-view';
import DevWork from './devwork-view';
import DesWork from './deswork-view';


import './landing-view.css'


class LandView extends React.Component {

    render() {

        return (
            <div>
                <img src={backImg} className="intro_background" alt="logo" />
                <div className="center">
                    <h1>Hello World! And Welcome!</h1>
                    <p>My name is Artin, Im a UI UX Developer from San Jose, California</p>
                    <a href={resume} className="button" download>Download my CV</a>
                </div>
                <div className="expertise">
                    <h1 id="expertise">My Work</h1>
                    <hr />
                    <br />
                    <p className="paragraphExpertise">
                        Being well-versed in HTML, CSS, Javascript, and React, I understand how to build for design and development by balancing wireframes, and prototypes 
                        with coding plans. I prioritize understanding users by balancing marketing principles, with user interview techniques, competitive research, usability 
                        testing, and user personas to build a comprehensive support strategy. Equally important to my process is establishing or incorporating a brand. Design
                        Development is one single process.
                    </p>
                    <DesWork />
                    <DevWork />
                    <GDWork />
                    <br />
                </div>
            </div>
        );
    }
}

export default LandView