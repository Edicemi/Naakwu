import React from 'react'
import background1 from './assets/Rectangle 17 (2).png'
import background2 from './assets/Rectangle 17 (1).png'
import background3 from './assets/Rectangle 17.png'
import backgrounda from './assets/Group.png'
import backgroundb from './assets/Group (1).png'
import backgroundc from './assets/Group (2).png'

import './Container2.css'
function Container2() {
    return (
        <div className="box">
            <div className="boxa">
                <img className="back1" src={backgrounda} alt="backgrounds" />
                <img className="back" src={background1} alt="backgrounds" />
                <p>Naakwa <span className="colora">fleet</span></p>
                <div className="rectanglea"></div>
            </div>
            <div className="boxb">
            <img className="back2" src={backgroundb} alt="backgrounds" />

                <img className="back" src={background3} alt="backgroundss" />
                <p>Naakwa <span className="colorb">ride</span></p>
                <div className="rectangleb"></div>
            </div>
            <div className="boxc">
            <img className="back3" src={backgroundc} alt="backgrounds" />

                <img className="back" src={background2} alt="backgroundsss" />
                <p>Naakwa <span className="colorc">x</span></p>
                <div className="rectanglec"></div>
            </div>
        </div>
    )
}

export default Container2
