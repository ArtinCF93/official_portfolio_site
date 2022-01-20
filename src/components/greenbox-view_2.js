import React, {useState} from 'react';
import { SliderGreenboxData } from './SliderGreenboxData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './work-view.css'

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


let GreenBoxView = ({slides}) => {

    //current state is defaulted at 0
    let [currentIMG, selectedIMG] = useState(0);
    let length = slides.length;

    let nextSlide = () => {
// Since the greenbox array has 12 elements, it has a length of 12.
// length - 1 means at the last element of the array, because the last index is 11 (as first index starts at 0). So 12 -1 = 11 which is the last element in the array.
// if the current index is = to the last index in the array; ? is used as 'then' to then instruct 'setCurrent' (as a function) to set the state of 'current' to 0.
// else if index is not at the last index of the array, increment the index of 'current' to the next element in the array. 
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
            <h1>GreenBox</h1>
                <hr />
                <br /><br />
                <div className='image-container'>
                <img src={imgGB1} alt="GBScreen1" className='imgGB' onClick={() => selectedIMG(currentIMG = 0)}/>
                <img src={imgGB2} alt="GBScreen2" className='imgGB' onClick={() => selectedIMG(currentIMG = 1)}/>
                <img src={imgGB3} alt="GBScreen3" className='imgGB' onClick={() => selectedIMG(currentIMG = 2)}/>
                <img src={imgGB4} alt="GBScreen4" className='imgGB' onClick={() => selectedIMG(currentIMG = 3)}/>
                <img src={imgGB5} alt="GBScreen5" className='imgGB' onClick={() => selectedIMG(currentIMG = 4)}/>
                <img src={imgGB6} alt="GBScreen6" className='imgGB' onClick={() => selectedIMG(currentIMG = 5)}/>
                <img src={imgGB7} alt="GBScreen7" className='imgGB' onClick={() => selectedIMG(currentIMG = 6)}/>
                <img src={imgGB8} alt="GBScreen8" className='imgGB' onClick={() => selectedIMG(currentIMG = 7)}/>
                <img src={imgGB9} alt="GBScreen9" className='imgGB' onClick={() => selectedIMG(currentIMG = 8)}/>
                <img src={imgGB10} alt="GBScreen10" className='imgGB' onClick={() => selectedIMG(currentIMG = 9)}/>
                <img src={imgGB11} alt="GBScreen11" className='imgGB' onClick={() => selectedIMG(currentIMG = 10)}/>
                <img src={imgGB12} alt="GBScreen12" className='imgGB' onClick={() => selectedIMG(currentIMG = 11)}/>
            {SliderGreenboxData.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === currentIMG && (
                            <img src={slide.image} alt='greenbox image' className='sliderImage'/>
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

export default GreenBoxView