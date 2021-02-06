import React from 'react';
import './Hero.css';
import Drone from './Drone.png';
import Shadow from './Shadow.png';

function Hero () {
    return (
        <header className='hero'>
            <img className='drone' src={Drone} alt='Drone'/>
            <div className='heroText'>
                <h1 className='display'>
                    <span>F</span>210
                </h1>
                <p>
                    Lorem ipsum dolor sit amet
                </p>
                <a className='ctaBtn' href='/ContactPage' role='button'>Learn More</a>
            </div>
            <img className='shadow' src={Shadow} alt='Drone'/>
        </header>
    );
}

export default Hero;