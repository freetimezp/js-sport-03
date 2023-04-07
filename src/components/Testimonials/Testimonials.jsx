import React, { useState } from 'react';

import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

import './Testimonials.css';

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className='testimonials' id='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>

                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="testimonial" />

                <div className="arrows">
                    <img 
                        src={leftArrow} 
                        alt="arrow" 
                        onClick={() => selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1 )}
                    />
                    <img 
                        src={rightArrow} 
                        alt="arrow" 
                        onClick={() => selected === (tLength - 1)  ? setSelected(0) : setSelected((prev) => prev + 1 )}
                    />
                </div>
            </div>
        </div>
    );
}

export default Testimonials;