import React from 'react'
import background1 from './assets/Rectangle 17 (2).png'
import background2 from './assets/Rectangle 17 (1).png'
import background3 from './assets/Rectangle 17.png'

import './Container2.css'
function Container2() {
    return (
        <div className="box">
            <div className="boxa">
                <div className="squares">
                    <div className="square1"></div>
                    <div className="square2"></div>
                </div>
                <img className="back" src={background1} alt="backgrounds" />
                <p>Naakwa <span className="colora">fleet</span></p>
                <div className="rectanglea"></div>
            </div>
            <div className="boxb">
                <div className="squares">
                    <div className="square1"></div>
                    <div className="square3"></div>
                </div>
                <img className="back" src={background2} alt="backgroundss" />
                <p>Naakwa <span className="colorb">ride</span></p>
                <div className="rectangleb"></div>
            </div>
            <div className="boxc">
                <div className="squares">
                    <div className="square1"></div>
                    <div className="square4"></div>
                </div>
                <img className="back" src={background3} alt="backgroundsss" />
                <p>Naakwa <span className="colorc">x</span></p>
                <div className="rectanglec"></div>
            </div>
        </div>
    )
}

export default Container2
