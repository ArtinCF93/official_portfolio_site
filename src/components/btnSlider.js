import React, {useState} from 'react'
import './btnSlider.css'
import { SliderGreenboxData } from './SliderGreenboxData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

let BtnSlider = ({slides}) => {

    //current state is defaulted at 0
    let [current, setCurrent] = useState(0);
    let length = slides.length;

    let nextSlide = () => {
// Since the greenbox array has 12 elements, it has a length of 12.
// length - 1 means at the last element of the array, because the last index is 11 (as first index starts at 0). So 12 -1 = 11 which is the last element in the array.
// if the current index is = to the last index in the array; ? is used as 'then' to then instruct 'setCurrent' (as a function) to set the state of 'current' to 0.
// else if index is not at the last index of the array, increment the index of 'current' to the next element in the array. 
        setCurrent(current === length -1 ? 0 : current + 1);
    };

    let prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    };

    console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div>
            <FaArrowAltCircleLeft clasName='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight clasName='right-arrow' onClick={nextSlide}/>
            {SliderGreenboxData.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            <img src={slide.image} alt='greenbox image' className='sliderImage'/>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default BtnSlider
