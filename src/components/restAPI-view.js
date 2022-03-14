import React, {useState} from 'react';
import { SliderRestAPIData } from './SliderRestAPIData.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './work-view.css'

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


let RestAPIView = ({slides}) => {

    //current state is defaulted at 0
    //the second value is a function used to change the state of the first value
    let [currentIMG, selectedIMG] = useState(0);
    let length = slides.length;

    let nextSlide = () => {
// Since the greenbox array has 12 elements, it has a length of 12.
// length - 1 means at the last element of the array, because the last index is 11 (as first index starts at 0). So 12 -1 = 11 which is the last element in the array.
// if the current index is = to the last index in the array; ? is used as 'then' to then set the state of 'currentIMG' to 0 upon click.
// : is used as 'else'; else if index is not at the last index of the array, increment the index of 'currentIMG' to the next element in the array. 
        selectedIMG(currentIMG === length -1 ? 0 : currentIMG + 1);
    };

    let prevSlide = () => {
        selectedIMG(currentIMG === 0 ? length -1 : currentIMG - 1);
    };

    console.log(currentIMG)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='container'>
            <h1>Rest API and Database</h1>
                <hr />
                <br /><br />
                <div className='image-container'>
                <img src={imgRAPI1} alt="RAPIscreen1" className='imgGB' onClick={() => selectedIMG(currentIMG = 0)}/>
                <img src={imgRAPI2} alt="RAPIscreen2" className='imgGB' onClick={() => selectedIMG(currentIMG = 1)}/>
                <img src={imgRAPI3} alt="RAPIscreen3" className='imgGB' onClick={() => selectedIMG(currentIMG = 2)}/>
                <img src={imgRAPI4} alt="RAPIscreen4" className='imgGB' onClick={() => selectedIMG(currentIMG = 3)}/>
                <img src={imgRAPI5} alt="RAPIscreen5" className='imgGB' onClick={() => selectedIMG(currentIMG = 4)}/>
                <img src={imgRAPI6} alt="RAPIscreen6" className='imgGB' onClick={() => selectedIMG(currentIMG = 5)}/>
                <img src={imgRAPI7} alt="RAPIscreen7" className='imgGB' onClick={() => selectedIMG(currentIMG = 6)}/>
                <img src={imgRAPI8} alt="RAPIscreen8" className='imgGB' onClick={() => selectedIMG(currentIMG = 7)}/>
                <img src={imgRAPI9} alt="RAPIscreen9" className='imgGB' onClick={() => selectedIMG(currentIMG = 8)}/>
                <img src={imgRAPI10} alt="RAPIscreen10" className='imgGB' onClick={() => selectedIMG(currentIMG = 9)}/>
                <img src={imgRAPI11} alt="RAPIscreen11" className='imgGB' onClick={() => selectedIMG(currentIMG = 10)}/>
                <img src={imgRAPI12} alt="RAPIscreen12" className='imgGB' onClick={() => selectedIMG(currentIMG = 11)}/>
                <img src={imgRAPI13} alt="RAPIscreen12" className='imgGB' onClick={() => selectedIMG(currentIMG = 12)}/>
            {SliderRestAPIData.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === currentIMG && (
                            <img src={slide.image} alt='restAPI image' className='sliderImage'/>
                        )}
                    </div>
                )
            })}
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        </div>
    </div>
    )
}

export default RestAPIView