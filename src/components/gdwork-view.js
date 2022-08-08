import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../files/197 Proj_3 Brand Campaign.pdf';
import './gdwork-view.css'

class GDWork extends React.Component {

    render() {

        return (
                <div className="container">
                <h1>Marketing Graphic Design</h1>
                <hr />
                <br /><br />
                <div className="grid">
                    <div className="grid_item1">
                    <a href = {Pdf} target = "_blank" className="workButton">See Case Study</a>
                    </div>
                    <div className="grid_item2">
                        <Link to='/myworks/f19RSwork' className="workButton">See Work</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default GDWork