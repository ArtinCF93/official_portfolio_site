import React from 'react';
import imgRS1 from '../files/portfolio_images/RS_1.jpg'
import imgRS2 from '../files/portfolio_images/RS_2.jpg'
import imgRS3 from '../files/portfolio_images/RS_3.jpg'
import imgRS4 from '../files/portfolio_images/RS_4.jpg'
import './work-view.css'

class FS19RSView extends React.Component {

    render() {

        return (
            <div className="container">
                <h1>Fitness 19 , Right Stuff</h1>
                <hr />
                <br /><br />
                <img src={imgRS1} alt="Fitness_profile" className='imgRS'/>
                <img src={imgRS2} alt="RSPoster" className='imgRS'/>
                <img src={imgRS3} alt="RSPoster2" className='imgRS'/>
                <img src={imgRS4} alt="RSFlyer" className='imgRS'/>
                </div>
        );
    }
}

export default FS19RSView