import React from 'react';
import imgPS1 from '../files/portfolio_images/AzimiArtin_CaseStudy_1.png';
import imgPS2 from '../files/portfolio_images/AzimiArtin_CaseStudy_2.png';
import imgPS3 from '../files/portfolio_images/User_Personas1.png';
import imgPS4 from '../files/portfolio_images/User_Personas_2.png';
import imgPS5 from '../files/portfolio_images/User_Personas_3.png';
import './gdwork-view.css'

let PolitiselfView = () => {

    return (
        <div className='container'>
            <h1>Politiself</h1>
                <hr />
                <br /><br />
                <div className='image-container'>
                <img src={imgPS1} alt="PSscreen1" className='imgRS'/>
                <img src={imgPS3} alt="PSscreen1" className='imgRS'/>
                <img src={imgPS4} alt="PSscreen1" className='imgRS'/>
                <img src={imgPS5} alt="PSscreen1" className='imgRS'/>
                <img src={imgPS2} alt="PSscreen1" className='imgRS'/>
        </div>
    </div>
    )
}

export default PolitiselfView