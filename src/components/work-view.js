import React from 'react';
import { Link } from 'react-router-dom';
import './work-view.css'

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
                        <Link to='/greenbox' className="button_2">See Work</Link>
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
                            <Link to='/greenbox' className="button_2">See Work</Link>
                    </div>
                    <div className="grid_item4">
                        <h2>Rest API and database</h2>
                        <p className='descr'>
                        Building server-side code (REST API and database) using Node JS, Mongoose, MongoDB, request routing and Express
                        </p>
                        <Link to='/f19RSwork' className="button_2">See Work</Link>
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