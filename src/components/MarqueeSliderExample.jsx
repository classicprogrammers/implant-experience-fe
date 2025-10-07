import React from 'react';
import MarqueeSlider from './MarqueeSlider';
import { marqueeData } from '../data/marqueeData';
import marqueeLogo from '../assets/images/marqueeLogo.png';
import './MarqueeSlider.css';

const MarqueeSliderExample = () => {
    return (
        <div>
            <MarqueeSlider
                items={marqueeData}
                logo={marqueeLogo}
                backgroundColor="#00ACB2"
                textColor="white"
            />
        </div>
    );
};

export default MarqueeSliderExample;

