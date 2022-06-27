import React from 'react'
import hero1 from './assets/man.jpg'
import icon1 from './assets/Frame 9.png'
import hero2 from './assets/tech.jpg'
import hero3 from './assets/Frame 150.jpg'
import hero4 from './assets/Frame 151.jpg'
import hero5 from './assets/Group 13.png'

import Nav from './Nav';
import './Hero.css'
function Hero() {
    return (
        <div className="Hero-section">
            <img className="hero-image" src={hero1} alt="Logo1" />
            <Nav />
            <img className="hero-icon" src={icon1} alt="Logo2" />
            <div className='third'>
                <div className="first">
                    <img className="Image" src={hero2} alt="Logo2" />
                    <img className="Image1" src={hero3} alt="Logo3" />
                </div>
                <div className="play">                    
                <img className="Image1" src={hero5} alt="Logo4" />
                </div>

                <div className="second">
                    <img className="Image2" src={hero4} alt="Logo4" />
                </div>
            </div>

            <div className="shape"></div>
        </div>
    )
}

export default Hero


