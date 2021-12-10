import React from 'react';

import { useDispatch } from 'react-redux';
import { nextSlide, previousSlide } from '../features/btnSliderSlice';

//Slider Buttons Icon
import next from '../images/icon-next.svg';
import previous from '../images/icon-previous.svg';



function BtnSlider() {
    const dispatch = useDispatch();

    return (
        <div className="btn-slider-div">
        <button onClick={() => dispatch(previousSlide())} className="previous" >
            <img src={previous} alt="previous-icon"/>
        </button>
        <button onClick={() => dispatch(nextSlide())} className="next">
             <img src={next} alt="next-icon" />
        </button>
        </div>
    )
}

export default BtnSlider;
