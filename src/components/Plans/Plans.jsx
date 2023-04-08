import React from 'react';

import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

import './Plans.css';

const Plans = () => {
    return (
        <div className='plans-container'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>

            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>Ready to start</span>
                <span>your journy</span>
                <span className='stroke-text'>now with us</span>
            </div>

            <div className="plans">
                {plansData.map((plan, index) => (
                    <div className='plan' key={index}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className='feature' key={i}>
                                    <img src={whiteTick} alt="white tick" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See more benefits &#8594; </span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;
