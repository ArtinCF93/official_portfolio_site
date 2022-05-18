import React from 'react';
import { Link } from 'react-router-dom';
import backImg from '../files/website_background.jpg'
import prtImg from '../files/Me_3.jpg'
import GDIcon from '../files/GDIcon.png';
import UXIcon from '../files/UXIcon.png';
import CdIcon from '../files/CdIcon.png'
import resume from '../files/Design_Resume-1.pdf'

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
                    <h1 id="expertise">My Expertise</h1>
                    <hr />
                    <br />
                    <p className="paragraphExpertise">
                        Being well-versed in HTML, CSS, Javascript, and React, I understand how to build for design and development by balancing wireframes, and prototypes 
                        with coding plans. I prioritize understanding users by balancing marketing principles, with user interview techniques, competitive research, usability 
                        testing, and user personas to build a comprehensive support strategy. Equally important to my process is establishing or incorporating a brand. Design
                        Development is one single process.
                    </p>
                    <br />
                    <br />
                    <div className="gridExpertise">
                        <div className="itemExpertise">
                            <img src={GDIcon} alt="GraphicDesignIcon" className='GDIcon' />
                            <h2>Marketing Graphic Designer</h2>
                            <p className="paragraphExpertise">As a Graphic Designer for Cloud Digital Channel Network Marketing
                                Group in the advertising industry, I worked big clients including Fitness 19, Right Stuff, V.co, 
                                and Bay Areas Finest, as well as other various local small hispanic businesses.
                            </p>
                            <Link to='/myworks/GDworks' className="workButton">See Projects</Link>
                        </div>
                        <div className="itemExpertise">
                            <img src={UXIcon} alt="UXIcon" className='GDIcon' />
                            <h2>UI UX Designer</h2>
                            <p className="paragraphExpertise">As a UI UX Designer working with Facebook on internal software designs.
                                Using figma as the main tool, with experience in wireframing and protoyping with a strong
                                concious for user experience psycology. Check out my Politiself casestudy!
                            </p>
                            <Link to='/myworks/politiself' className="workButton">See Project</Link>
                        </div>
                        <div className="itemExpertise">
                            <img src={CdIcon} alt="CodingIcon" className='GDIcon' />
                            <h2>Full Stack Web Developer</h2>
                            <p className="paragraphExpertise">With an education in full stack development, skills include; Javascript, Node, Bootstrap, MongoDB, React and React-Native</p>
                            <Link to='/myworks' className="workButton">See Projects</Link>
                        </div>
                    </div>
                    <br />
                    {/* <div className="container">
            <h1 id='contact'>Contact Me</h1>
            <hr />
            <p>Hard work is a Journey, but worth the Reward. Lets Talk!</p>
            <br /><br />
            <img src={prtImg} alt="Portrait" className="profile_portrait" />
            <br /><br /><br />
            <h3>For Inquiries</h3>
            Email me at<br />
            <a href="mailto:Toojool@gmail.com">Toojool@gmail.com</a>
        </div> */}
                </div>
            </div>
        );
    }
}

export default LandView