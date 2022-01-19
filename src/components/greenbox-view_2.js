import React from 'react';
// import { SRLWrapper } from "simple-react-lightbox";
import BtnSlider from './btnSlider';

import './work-view.css'

import { SliderGreenboxData } from './SliderGreenboxData';

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


class GreenBoxView extends React.Component {
    constructor(){
        super();
        this.state={
            selectedImg: imgGB1
        }
    }


    toggleImage1 = () => {
        this.setState({ selectedImg: imgGB1})
    }

    toggleImage2 = () => {
        this.setState({ selectedImg: imgGB2})
    }

    toggleImage3 = () => {
        this.setState({ selectedImg: imgGB3})
    }

    toggleImage4 = () => {
        this.setState({ selectedImg: imgGB4})
    }

    toggleImage5 = () => {
        this.setState({ selectedImg: imgGB5})
    }
    
    toggleImage6 = () => {
        this.setState({ selectedImg: imgGB6})
    }

    toggleImage7 = () => {
        this.setState({ selectedImg: imgGB7})
    }

    toggleImage8 = () => {
        this.setState({ selectedImg: imgGB8})
    }

    toggleImage9 = () => {
        this.setState({ selectedImg: imgGB9})
    }

    toggleImage10 = () => {
        this.setState({ selectedImg: imgGB10})
    }

    toggleImage11 = () => {
        this.setState({ selectedImg: imgGB11})
    }

    toggleImage12 = () => {
        this.setState({ selectedImg: imgGB12})
    }



    render() {

        return (
            <div className="container">
                <h1>GreenBox</h1>
                <hr />
                <br /><br />
                <div className='image-container'>
                <img src={imgGB1} alt="GBScreen1" className='imgGB' onClick={this.toggleImage1.bind(this)}/>
                <img src={imgGB2} alt="GBScreen2" className='imgGB' onClick={this.toggleImage2.bind(this)}/>
                <img src={imgGB3} alt="GBScreen3" className='imgGB' onClick={this.toggleImage3.bind(this)}/>
                <img src={imgGB4} alt="GBScreen4" className='imgGB' onClick={this.toggleImage4.bind(this)}/>
                <img src={imgGB5} alt="GBScreen5" className='imgGB' onClick={this.toggleImage5.bind(this)}/>
                <img src={imgGB6} alt="GBScreen6" className='imgGB' onClick={this.toggleImage6.bind(this)}/>
                <img src={imgGB7} alt="GBScreen7" className='imgGB' onClick={this.toggleImage7.bind(this)}/>
                <img src={imgGB8} alt="GBScreen8" className='imgGB' onClick={this.toggleImage8.bind(this)}/>
                <img src={imgGB9} alt="GBScreen9" className='imgGB' onClick={this.toggleImage9.bind(this)}/>
                <img src={imgGB10} alt="GBScreen10" className='imgGB' onClick={this.toggleImage10.bind(this)}/>
                <img src={imgGB11} alt="GBScreen11" className='imgGB' onClick={this.toggleImage11.bind(this)}/>
                <img src={imgGB12} alt="GBScreen12" className='imgGB' onClick={this.toggleImage12.bind(this)}/>
                <img src={this.state.selectedImg} alt='selected' className='selectedIMG'></img>
                </div>
                <BtnSlider slides={SliderGreenboxData}/>
            </div>
        );
    }
}

export default GreenBoxView