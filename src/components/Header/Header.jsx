import React, { useState } from 'react';
import { Link } from 'react-scroll';

import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

import './Header.css';

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className='header'>
            <img src={Logo} alt="logo" className='logo' />

            {menuOpened === false && mobile === true ? (
                <div
                    style={{ padding: '0.5rem', backgroundColor: "var(--appColor)", borderRadius: '5px' }}
                    onClick={() => setMenuOpened(true)}
                >
                    <img src={Bars} style={{ width: '1.5rem', height: '1.5rem' }} alt="bars" />
                </div>
            ) : (
                <ul className='header-menu'>
                    <li>
                        <Link to="home" onClick={() => setMenuOpened(false)} spy={true} smooth={true}>Home</Link>
                    </li>
                    <li>
                        <Link to="programs" onClick={() => setMenuOpened(false)} spy={true} smooth={true}>Programs</Link>
                    </li>
                    <li>
                        <Link to="reasons" onClick={() => setMenuOpened(false)} spy={true} smooth={true}>Why Us</Link>
                    </li>
                    <li>
                        <Link to="plans" onClick={() => setMenuOpened(false)} spy={true} smooth={true}>Plans</Link>
                    </li>
                    <li>
                        <Link to="testimonials" onClick={() => setMenuOpened(false)} spy={true} smooth={true}>Testimonials</Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Header;
