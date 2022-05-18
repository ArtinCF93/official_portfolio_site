import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to='/myworks/GDworks/greenbox' className="workButton">See Work</Link>
                    </div>
                    <div className="grid_item2">
                        <Link to='/myworks/GDworks/f19RSwork' className="workButton">See Work</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default GDWork