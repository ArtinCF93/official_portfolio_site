import React from 'react';
import { Link } from 'react-router-dom';
import './gdwork-view.css'

class DevWork extends React.Component {

    render() {

        return (
            <div className="container">
                <h1>Development Projects</h1>
                <hr />
                <br /><br />
                <div className="grid">
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
                        <a href="https://artincf93.github.io/myFlix-Angular-client/welcome" className="button_2" target='_blank'>
                        Live Demo    
                        </a>
                        <br /><br />
                        <a href="https://github.com/ArtinCF93/myFlix-Angular-client" className="button_3" target='_blank'>
                            View code on GitHub
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

export default DevWork