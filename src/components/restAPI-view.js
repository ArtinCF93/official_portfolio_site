import React, {useState} from 'react';
// import './work-view.css'

import imgRAPI1 from '../files/portfolio_images/restAPI/CF_Casestudy_1_1.jpg'
import imgRAPI2 from '../files/portfolio_images/restAPI/CF_Casestudy_1_2.jpg'
import imgRAPI3 from '../files/portfolio_images/restAPI/CF_Casestudy_1_3.jpg'
import imgRAPI4 from '../files/portfolio_images/restAPI/CF_Casestudy_1_4.jpg'
import imgRAPI5 from '../files/portfolio_images/restAPI/CF_Casestudy_1_5.jpg'
import imgRAPI6 from '../files/portfolio_images/restAPI/CF_Casestudy_1_6.jpg'
import imgRAPI7 from '../files/portfolio_images/restAPI/CF_Casestudy_1_7.jpg'
import imgRAPI8 from '../files/portfolio_images/restAPI/CF_Casestudy_1_8.jpg'
import imgRAPI9 from '../files/portfolio_images/restAPI/CF_Casestudy_1_9.jpg'
import imgRAPI10 from '../files/portfolio_images/restAPI/CF_Casestudy_1_10.jpg'
import imgRAPI11 from '../files/portfolio_images/restAPI/CF_Casestudy_1_11.jpg'
import imgRAPI12 from '../files/portfolio_images/restAPI/CF_Casestudy_1_12.jpg'
import imgRAPI13 from '../files/portfolio_images/restAPI/CF_Casestudy_1_13.jpg'


let RestAPIView = () => {

    return (
        <div className='container'>
            <h1>Rest API and Database</h1>
                <hr />
                <br /><br />
                <div className='image-container'>
                <img src={imgRAPI1} alt="RAPIscreen1" className='imgGB' />
                <img src={imgRAPI2} alt="RAPIscreen2" className='imgGB' />
                <img src={imgRAPI3} alt="RAPIscreen3" className='imgGB' />
                <img src={imgRAPI4} alt="RAPIscreen4" className='imgGB' />
                <img src={imgRAPI5} alt="RAPIscreen5" className='imgGB' />
                <img src={imgRAPI6} alt="RAPIscreen6" className='imgGB' />
                <img src={imgRAPI7} alt="RAPIscreen7" className='imgGB' />
                <img src={imgRAPI8} alt="RAPIscreen8" className='imgGB' />
                <img src={imgRAPI9} alt="RAPIscreen9" className='imgGB' />
                <img src={imgRAPI10} alt="RAPIscreen10" className='imgGB' />
                <img src={imgRAPI11} alt="RAPIscreen11" className='imgGB' />
                <img src={imgRAPI12} alt="RAPIscreen12" className='imgGB' />
                <img src={imgRAPI13} alt="RAPIscreen12" className='imgGB' />
        </div>
    </div>
    )
}

export default RestAPIView