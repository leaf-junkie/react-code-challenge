import React from 'react';
import './Hero.css';
import Drone from './Drone.png';

function Hero () {
    return (
        <header className='hero'>
            <div className='heroText'>
                <h1 className='display'>
                    <span>F</span>210
                </h1>
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                </h4>
                
            </div>
            <img className='drone' src={Drone} alt='Drone'/>
        </header>
    );
}

export default Hero;