import React from 'react';
import imgPS from '../files/portfolio_images/AzimiArtin_CaseStudy.jpg'

import './work-view.css'

let PolitiselfView = () => {

    return (
        <div className='container'>
            <h1>Politiself</h1>
                <hr />
                <br /><br />
                <div className='image-container'>
                <img src={imgPS} alt="PSscreen1" className='imgRS'/>
        </div>
    </div>
    )
}

export default PolitiselfView