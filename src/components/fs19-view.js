import React from 'react';

import imgRS1 from '../files/portfolio_images/rightstuff/RS_1.jpg'
import imgRS2 from '../files/portfolio_images/rightstuff/RS_2.jpg'
import imgRS3 from '../files/portfolio_images/rightstuff/RS_3.jpg'
import imgRS4 from '../files/portfolio_images/rightstuff/RS_4.jpg'

import './gdwork-view.css'

let RSFSView = () => {

    return (
        <div className='container'>
            <h1>Right Stuff and Fitness 19</h1>
                <hr />
                <br /><br />
                <div className='grid2'>
                <img src={imgRS1} alt="RSscreen1" className='imgRS' />
                <img src={imgRS2} alt="RSscreen2" className='imgRS' />
                <img src={imgRS3} alt="RSscreen3" className='imgRS' />
                <img src={imgRS4} alt="RSscreen4" className='imgRS' />
        </div>
    </div>
    )
}

export default RSFSView