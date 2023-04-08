import React from 'react';

import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <hr />
            <div className="footer">
                <div className="logo-f">
                    <img src={logo} alt="logo" />
                </div>
                <div className="social-links">
                    <img src={github} alt="github" />
                    <img src={instagram} alt="instagram" />
                    <img src={linkedin} alt="linkedin" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    );
}

export default Footer;
