import React, {useState} from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { RSFSData } from './RSFSData';

import imgRS1 from '../files/portfolio_images/rightstuff/RS_1.jpg'
import imgRS2 from '../files/portfolio_images/rightstuff/RS_2.jpg'
import imgRS3 from '../files/portfolio_images/rightstuff/RS_3.jpg'
import imgRS4 from '../files/portfolio_images/rightstuff/RS_4.jpg'

import './work-view.css'

let RSFSView = ({slides}) => {

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
            <h1>Right Stuff and Fitness 19</h1>
                <hr />
                <br /><br />
                <div className='image-container'>
                <img src={imgRS1} alt="RSscreen1" className='imgGB' onClick={() => selectedIMG(currentIMG = 0)}/>
                <img src={imgRS2} alt="RSscreen2" className='imgGB' onClick={() => selectedIMG(currentIMG = 1)}/>
                <img src={imgRS3} alt="RSscreen3" className='imgGB' onClick={() => selectedIMG(currentIMG = 2)}/>
                <img src={imgRS4} alt="RSscreen4" className='imgGB' onClick={() => selectedIMG(currentIMG = 3)}/>
            {RSFSData.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === currentIMG && (
                            <img src={slide.image} alt='RS image' className='imgRS'/>
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

export default RSFSView