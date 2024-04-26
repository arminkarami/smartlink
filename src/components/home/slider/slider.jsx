import React from 'react';
import './style.css';
import VideoBackground from './videoBackground';
import ImageSlider from './imageSlider';

function Slider() {
    return (
        <div className="slider-none">
            <VideoBackground />
            <ImageSlider />
        </div>
    );
}

export default Slider;
