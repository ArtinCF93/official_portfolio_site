import React from 'react';
import { Link } from 'react-router-dom';
import backImg from '../files/website_background.jpg'
import prtImg from '../files/Me_3.jpg'
import resume from '../files/Design_Resume-1.pdf'

import './landing-view.css'


class LandView extends React.Component {

  render() {

    return(
    <div>
    <img src={backImg} className="intro_background" alt="logo" />
    <div className="center">
        <h1>Hello World! And Welcome!</h1>
        <p>My name is Artin, Im a UI UX Developer from San Jose, California</p>
        <a href={resume} className="button" download>Download my CV</a>
    </div>
    <div className="row">
        <h1 id="expertise">My Expertise</h1>
        <hr />
        <div className="column">
            <h2>Marketing Graphic Designer</h2>
            <p>As a Graphic Designer for Cloud Digital Channel Network Marketing
                Group in the advertising industry, I worked big clients including Fitness 19, Right Stuff, V.co, and Bay
                Areas Finest, as well as other various local small hispanic businesses.
            </p>
        </div>
        <div className="column">
            <h2>UI UX Designer</h2>
            <p>As a UI UX Designer working with Facebook on internal software designs.
                Using figma as the main tool, with experience in wireframing and protoyping with a strong
                 concious for user experience psycology. 
            </p>
        </div>
        <div className="column">
            <h2>Full Stack Web Developer</h2>
            <p>With an education in full stack development, skills include; Javascript, Node, Bootstrap, MongoDB, React and React-Native</p>
        </div>
        <div className="center_button"> 
        <Link to='/myworks' className="button_work">Check out My Work</Link>
        </div>
        <br />
        <div className="container">
            <h1>Contact Me</h1>
            <hr />
            <p>Hard work is a Journey, but worth the Reward. Lets Talk!</p>
            <br /><br />
            <img src={prtImg} alt="Portrait" className="profile_portrait" />
            <br /><br /><br />
            <h3>For Inquiries</h3>
            Email me at<br />
            <a href="mailto:Toojool@gmail.com">Toojool@gmail.com</a>
        </div>
    </div>
    </div>
    );
  }
}

export default LandView