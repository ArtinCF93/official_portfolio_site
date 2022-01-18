import React from 'react';
import { Link } from 'react-router-dom';
import './work-view.css'
import caseStudy from '../files/CF_Casestudy_1.pdf'
import caseStudy2 from '../files/AzimiArtin_CaseStudy.pdf'

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
                        <Link to='/f19RSwork' className="button_2">See Work</Link>
                    </div>
                    <div className="grid_item3">
                        <h2 className='title'>Politiself</h2>
                        <p className='descr1'>
                            A case study that highlights a UI UX project created for an app called Politiself. Politiself is a social
                            media app targeting those in communities looking to find or promote 3rd party politics.</p>
                        <a href={caseStudy2} className="button_2" download>Download to view Case study</a>
                    </div>
                    <div class="grid_item4">
                        <h2>Rest API and database</h2>
                        <p className='descr'>
                        Building server-side code (REST API and database) using Node JS, Mongoose, MongoDB, request routing and Express
                        </p>
                        <a href={caseStudy} className="button_2" download>Download to view Case study</a>
                        <br /><br /><br /><br /><br /><br />
                        <a href="https://github.com/ArtinCF93/movie_flix_api" className="button_3" target='_blank'>
                            View code on GitHub
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkView