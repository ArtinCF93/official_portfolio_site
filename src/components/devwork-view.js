import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../files/CF_Casestudy_RestAPI.pdf'
import Pdf2 from '../files/CF_Casestudy_2_MovieApp.pdf'
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
                            <a href={Pdf} target="_blank" className="workButton2">See Case Study</a>
                            <a href="https://github.com/ArtinCF93/movie_flix_api" className="gitButton" target='_blank'>
                                View code on GitHub
                            </a>
                        </div>
                    </div>
                    <div className="grid_item4">
                        <div className='devButtons'>
                            <a href={Pdf2} target="_blank" className="workButton2">See Case Study</a>
                            <a href="https://mvflix.netlify.app/" className="workButton3" target='_blank'>
                                Live Demo
                            </a>
                            <a href="https://github.com/ArtinCF93/movie_flix_api" className="gitButton" target='_blank' >
                                View code on GitHub
                            </a>
                        </ div>
                    </div>
                    <div className="grid_item5">
                        <div className='devButtons'>
                            <a href="https://artincf93.github.io/myFlix-Angular-client/welcome" className="workButton4" target='_blank'>
                                Live Demo
                            </a>
                            <a href="https://github.com/ArtinCF93/myFlix-Angular-client" className="gitButton" target='_blank'>
                                View code on GitHub
                            </a>
                        </ div>
                    </div>
                    <div className="grid_item6">
                        <div className='devButtons'>
                            <a href="https://artincf93.github.io/js_app_pokedex/" className="workButton4" target='_blank'>
                                Live Demo
                            </a>
                            <a href="https://github.com/ArtinCF93/js_app_pokedex" className="gitButton" target='_blank'>
                                View code on GitHub
                            </a>
                        </ div>
                    </div>
                    <div className="grid_item7">
                        <div className='devButtons'>
                            <a href="https://artincf93.github.io/Meetupp-app/" className="workButton4" target='_blank'>
                                Live Demo
                            </a>
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