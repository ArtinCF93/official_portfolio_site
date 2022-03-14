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
                        <div className='textbox'>
                        <p className='descr'>
                            A branding campaign created for the company "V.co" for their Greenbox invention, which is a
                            vermicomposting tool for home owners to put composting in their own hands for home gardening.
                        </p>
                        </div>
                        <Link to='/greenbox' className="button_2">See Work</Link>
                    </div>
                    <div className="grid_item2">
                        <h2>Fitness 19 / Right Stuff Projects</h2>
                        <div className='textbox'>
                        <p className='descr'>
                            Examples of projects worked on for F19 and RS when working for CDCN Marketing Group. Visual Assets
                            created to market new classes, physical trainers and promotions.
                        </p>
                        </div>
                        <Link to='/f19RSwork' className="button_2">See Work</Link>
                    </div>
                    <div className="grid_item3">
                        <h2 className='title'>Politiself</h2>
                        <div className='textbox'>
                        <p className='descr'>
                            A case study that highlights a UI UX project created for an app called Politiself. Politiself is a social
                            media app targeting those in communities looking to find or promote 3rd party politics.
                        </p>
                        </div>
                            <Link to='/politiself' className="button_2">See Work</Link>
                    </div>
                    <div className="grid_item5">
                        <h2>Pokedex</h2>
                        <div className='textbox'>
                        <p className='descr'>
                        A small web application built with HTML, CSS, and JavaScript that loads
                        data from an external API and enables the viewing of data points in detail.
                        This project utilizes the fetch() API, JQuery, and BootStrap.
                        </p>
                        </div>
                        <a href="https://artincf93.github.io/js_app_pokedex/" className="button_2" target='_blank'>
                        Live Demo    
                        </a>
                        <br /><br />
                        <a href="https://github.com/ArtinCF93/js_app_pokedex" className="button_3" target='_blank'>
                            View code on GitHub
                        </a>
                    </div>
                    <div className="grid_item4">
                        <h2>Rest API and database</h2>
                        <div className='textbox'>
                        <p className='descr'>
                        Building server-side code (REST API and database) using Node JS, Mongoose, MongoDB, request routing and Express.
                        </p>
                        </div>
                        <Link to='/restAPI' className="button_2">See Work</Link>
                        <br /><br />
                        <a href="https://github.com/ArtinCF93/movie_flix_api" className="button_3" target='_blank'>
                            View code on GitHub
                        </a>
                    </div>
                    <div className="grid_item6">
                        <h2 style={{color:'white'}}>Client Side Programming with React</h2>
                        <div className='textbox'>
                        <p className='descr'>
                        React built app using the Rest API code to create the user interface of the app called MovieFlix.
                        This app will display a list of movies, along with its details, from the database. 
                        </p>
                        </div>
                        <a href="https://mvflix.netlify.app/" className="button_2" target='_blank'>
                        Live Demo    
                        </a>
                        <br /><br />
                        <a href="https://github.com/ArtinCF93/movie_flix_api" className="button_3" target='_blank' style={{color:'black'}}>
                            View code on GitHub
                        </a>
                    </div>
                    <div className="grid_item9">
                        <h2 style={{color:'white'}}>Client Side Programming with Angular</h2>
                        <div className='textbox'>
                        <p className='descr'>
                        Angular built app using the Rest API code to create the user interface of the app called MovieFlix.
                        Similar to the React App, this app will display a list of movies, along with its details, from the database.                 
                        </p>
                        </div>
                        <a href="https://github.com/ArtinCF93/chat-app" className="button_2" target='_blank'>
                        Github Code 
                        </a>
                    </div>
                    <div className="grid_item7">
                        <h2>Test Driven Development</h2>
                        <div className='textbox'>
                        <p className='descr'>
                        A serverless, progressive web application (PWA) built with React using a
                        test-driven development (TDD) technique. The application uses the Google
                        Calendar API to fetch upcoming events that can be filtered by city.                      
                        </p>
                        </div>
                        <a href="https://artincf93.github.io/Meetupp-app/" className="button_2" target='_blank'>
                        Live Demo    
                        </a>
                        <br /><br />
                        <a href="https://github.com/ArtinCF93/Meetupp-app" className="button_3" target='_blank'>
                            View code on GitHub
                        </a>
                    </div>
                    <div className="grid_item8">
                        <h2>Native App Development</h2>
                        <div className='textbox'>
                        <p className='descr'>
                        A chat app built using React Native for mobile devices. The app will
                        provide users with a chat interface and options to share images and their
                        location.                   
                        </p>
                        </div>
                        <a href="https://github.com/ArtinCF93/chat-app" className="button_2" target='_blank'>
                        Github Code 
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkView