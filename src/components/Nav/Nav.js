import React from 'react';
import './Nav.css';
import Logo from '../../assets/Logo.png';

const Nav = () => {
    return (
        <nav className='nav'>
            <a href='/HomePage'><img className='logo' src={ Logo } 
            alt='Company logo: The company name (BYRDMR) in all caps, with BYRD in orange and MR italicized and in black.'/></a>       
            <ul className='navItems'>
                <li><a href='/ContactPage'>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
