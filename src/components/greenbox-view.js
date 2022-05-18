import React from 'react';

import imgGB1 from '../files/portfolio_images/greenbox/GB_1.jpg'
import imgGB2 from '../files/portfolio_images/greenbox/GB_2.jpg'
import imgGB3 from '../files/portfolio_images/greenbox/GB_3.jpg'
import imgGB4 from '../files/portfolio_images/greenbox/GB_4.jpg'
import imgGB5 from '../files/portfolio_images/greenbox/GB_5.jpg'
import imgGB6 from '../files/portfolio_images/greenbox/GB_6.jpg'
import imgGB7 from '../files/portfolio_images/greenbox/GB_7.jpg'
import imgGB8 from '../files/portfolio_images/greenbox/GB_8.jpg'
import imgGB9 from '../files/portfolio_images/greenbox/GB_9.jpg'
import imgGB10 from '../files/portfolio_images/greenbox/GB_10.jpg'
import imgGB11 from '../files/portfolio_images/greenbox/GB_11.jpg'
import imgGB12 from '../files/portfolio_images/greenbox/GB_12.jpg'


let GreenBoxView = () => {

    return (
        <div className='container'>
            <h1>GreenBox</h1>
                <hr />
                <br /><br />
                <img src={imgGB1} alt="GBScreen1" className='imgGB'/>
                <img src={imgGB2} alt="GBScreen2" className='imgGB'/>
                <img src={imgGB3} alt="GBScreen3" className='imgGB'/>
                <img src={imgGB4} alt="GBScreen4" className='imgGB'/>
                <img src={imgGB5} alt="GBScreen5" className='imgGB'/>
                <img src={imgGB6} alt="GBScreen6" className='imgGB'/>
                <img src={imgGB7} alt="GBScreen7" className='imgGB'/>
                <img src={imgGB8} alt="GBScreen8" className='imgGB'/>
                <img src={imgGB9} alt="GBScreen9" className='imgGB'/>
                <img src={imgGB10} alt="GBScreen10" className='imgGB'/>
                <img src={imgGB11} alt="GBScreen11" className='imgGB'/>
                <img src={imgGB12} alt="GBScreen12" className='imgGB'/>
        </div>
    )
}

export default GreenBoxView