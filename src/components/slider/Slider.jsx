import React from 'react';
import sliderProp from '../../assets/Slider.jpg'
import './Slider.scss'

const Slider = () => {
    return (
        <div className='slider'>
            <img src={sliderProp} alt="" />
        </div>
    );
};

export default Slider;