import React from 'react'
import hero1 from './assets/man.jpg'
import icon1 from './assets/Frame 9.jpg'
import hero2 from './assets/tech.jpg'
import hero3 from './assets/Frame 150.jpg'
import hero4 from './assets/Frame 151.jpg'

import Nav from './Nav';
import './Hero.css'
function Hero() {
    return (
        <div className="Hero-section">
            <img className="hero-image" src={hero1} alt="Logo1" />
            <Nav />
            <img className="hero-icon" src={icon1} alt="Logo2" />
            <div>
                <div>
                    <img className="Image" src={hero2} alt="Logo2" />
                    <img className="Image1" src={hero3} alt="Logo3" />
                </div>
                <div>
                    <img className="Image2" src={hero4} alt="Logo4" />
                </div>
            </div>
        </div>
    )
}

export default Hero

//bsxsxknxshxvshxxvbjsvxshvj
//nsxsxsj
