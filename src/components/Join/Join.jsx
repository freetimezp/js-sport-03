import React, { useRef }  from 'react';

import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_lqpyxd1', 'template_3ty9whb', form.current, 'kk5oM2vPMYsBD367x')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='join' id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>Ready to</span>
                    <span> Level up</span>
                </div>
                <div>
                    <span>Your body</span>
                    <span className='stroke-text'> With us?</span>
                </div>
            </div>
            <div className="right-j">
                <form className="email-container" ref={form} onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder='Enter your email' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    );
}

export default Join;
