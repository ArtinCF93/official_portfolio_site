import React from 'react';
import './work-view.css'
import caseStudy from '../files/CF_Casestudy_1.pdf'


class WorkView extends React.Component {

    render() {

        return (
            <div className="container">
                <h1>My Works</h1>
                <hr />
                <br /><br />
                <div className="grid">
                    <div className="grid_item1">
                        <h2>Greenbox Branding Campaign</h2>
                        <p className='descr1'>A branding campaign created for the company "V.co" for their Greenbox invention, which is a
                            vermicomposting tool for home owners to put composting in their own hands for home gardening.
                        </p>
                        <a href="https://www.behance.net/gallery/46295473/The-GreenBox-project-Branding-Campaign" className="button_2" target='_blank'>
                            See project on Behance
                        </a>
                    </div>
                    <div className="grid_item2">
                        <h2>Fitness 19 / Right Stuff Projects</h2>
                        <p className='descr1'>
                            Examples of projects worked on for F19 and RS when working for CDCN Marketing Group. Visual Assets
                            created to market new classes, physical trainers and promotions.</p>
                        <a href="https://www.behance.net/gallery/95838735/Right-Stuff-Fitness-19-Projects" className="button_2" target='_blank'>
                            See project on Behance
                        </a>
                    </div>
                    <div className="grid_item3">
                        <h2 className='title'>Politiself</h2>
                        <p className='descr1'>
                            A case study that highlights a UI UX project created for an app called Politiself. Politiself is a social
                            media app targeting those in communities looking to find or promote 3rd party politics.</p>
                        <a href="https://www.behance.net/gallery/97183095/Politiself" className="button_2" target='_blank'>
                            See project on Behance
                        </a>
                    </div>
                    <div class="grid_item4">
                        <h2>Rest API and database</h2>
                        <p className='descr'>
                        Building server-side code (REST API and database) using Node JS, Mongoose, MongoDB, request routing and Express
                        </p>
                        <a href={caseStudy} download className="button_2">
                            View Case Study
                        </a><br /><br /><br /><br /><br /><br />
                        <a href="https://github.com/ArtinCF93/movie_flix_api" download className="button_3" target='_blank'>
                            View code on GitHub
                        </a>
                    </div>
                    <div class="grid__item">
                        <h2>Mobile web app</h2>
                        <p>
                            Within this project, I was responsible for the frontend. It’s written in React.js. Additionally, I've
                            created the HTML and CSS templates.
                        </p>
                        <a href="#" class="button_2">See project on GitHub</a>
                    </div>
                    <div class="grid__item">
                        <h2>Mobile web app</h2>
                        <p>
                            Within this project, I was responsible for the frontend. It’s written in React.js. Additionally, I've
                            created the HTML and CSS templates.
                        </p>
                        <a href="#" class="button_2">See project on GitHub</a>
                    </div>
                    <div class="grid__item">
                        <h2>Mobile web app</h2>
                        <p>
                            Within this project, I was responsible for the frontend. It’s written in React.js. Additionally, I've
                            created the HTML and CSS templates.
                        </p>
                        <a href="#" class="button_2">See project on GitHub</a>
                    </div>
                    <div class="grid__item">
                        <h2>Mobile web app</h2>
                        <p>
                            Within this project, I was responsible for the frontend. It’s written in React.js. Additionally, I've
                            created the HTML and CSS templates.
                        </p>
                        <a href="#" class="button_2">See project on GitHub</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkView