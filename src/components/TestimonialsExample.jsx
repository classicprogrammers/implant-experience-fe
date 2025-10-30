import React from 'react';
import Testimonials from './Testimonials';
import { testimonialsData } from '../data/testimonialsData';

const TestimonialsExample = () => {
    return (
        <div>
            <Testimonials testimonials={testimonialsData} />
        </div>
    );
};

export default TestimonialsExample;

