import React from 'react';
import ImgMe from '../files/IMG_Me.jpg';

import './about.css'

let AboutView = () => {

    return (
        <div className='container'>
            <h1>About Me</h1>
            <hr />
            <br /><br />
            <div className='descrContainer'>
            <img src={ImgMe} className="portrait" alt="portrait" />
            <p className='descr'>Hello! I'm Artin Azimi, and I'm a developer with a background in Graphic Design, Marketing, and UI UX.
                <br></br>
                Being well-versed in HTML, CSS, Javascript, and React, I understand how to build for design and development 
                by balancing wireframes, and prototypes with coding plans. I prioritize understanding users by balancing marketing 
                principles, with user interview techniques, competitive research, usability testing, and user personas to build a 
                comprehensive support strategy. Equally important to my process is establishing strong communication across teams.
                <br></br>
                As a Jr. UI/UX designer working at Facebook (a Genpact company client), compliance software is my responsibility. 
                I make visual changes based on user personas, user research, test plans, test cases, analytics, and policy changes. 
                I maintain collaboration across teams connecting the greater UX team, policy, and engineering teams.
                <br></br>
                I seek to join a company where I can invest in myself and grow as a valuable team member combining UX/UI and front-end 
                development skills. I recognize my greatest gift being the efficiency that I can provide a company. Long-term, I hold an 
                ambition to grow within a company to establish myself as a manager that oversees the complete lifecycle from research, to 
                design and development. Clear and open communication is vital to discovering workarounds and solving technical issues when 
                a disconnect exists between code and the desired aesthetic. As I build towards that goal, I will continue to challenge myself 
                and learn in new and unexpected situations.
            </p>
            </div>
        </div>
    )
}

export default AboutView