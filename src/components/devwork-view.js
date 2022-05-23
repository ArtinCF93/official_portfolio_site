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
                    <div className="grid_item3">
                        <div className='devButtons'>
                        <Link to='/myworks/devworks/restAPI' className="workButton">See CaseStudy</Link>
                        <br /><br />
                        <a href="https://github.com/ArtinCF93/movie_flix_api" className="gitButton"  target='_blank'>
                            View code on GitHub
                        </a>
                        </div>
                    </div>
                    <div className="grid_item4">
                    <div className='devButtons'>
                        <a href="https://mvflix.netlify.app/" className="workButton" target='_blank'>
                            Live Demo
                        </a>
                        <br /><br />
                        <a href="https://github.com/ArtinCF93/movie_flix_api" className="gitButton" target='_blank' >
                            View code on GitHub
                        </a>
                    </ div>
                    </div>
                    <div className="grid_item5">
                    <div className='devButtons'>
                        <a href="https://artincf93.github.io/myFlix-Angular-client/welcome" className="workButton" target='_blank'>
                            Live Demo
                        </a>
                        <br /><br />
                        <a href="https://github.com/ArtinCF93/myFlix-Angular-client" className="gitButton" target='_blank'>
                            View code on GitHub
                        </a>
                    </ div>
                    </div>
                    <div className="grid_item6">
                    <div className='devButtons'>
                        <a href="https://artincf93.github.io/js_app_pokedex/" className="workButton" target='_blank'>
                            Live Demo
                        </a>
                        <br /><br />
                        <a href="https://github.com/ArtinCF93/js_app_pokedex" className="gitButton" target='_blank'>
                            View code on GitHub
                        </a>
                    </ div>
                    </div>
                    <div className="grid_item7">
                    <div className='devButtons'>
                        <a href="https://artincf93.github.io/Meetupp-app/" className="workButton" target='_blank'>
                            Live Demo
                        </a>
                        <br /><br />
                        <a href="https://github.com/ArtinCF93/Meetupp-app" className="gitButton" target='_blank'>
                            View code on GitHub
                        </a>
                        </ div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DevWork