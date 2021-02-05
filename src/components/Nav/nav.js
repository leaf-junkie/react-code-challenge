import React from 'react';
import './Nav.css';
import Logo from '../../assets/Logo.png'

const Nav = () => {
    return (
        <nav>
            <a href='/HomePage'><img className='logo' src={Logo}/></a>
            <a href='/HomePage'>Home</a>
            <a href='/ContactPage'>Contact</a>
        </nav>
    );
}

export default Nav;