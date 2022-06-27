import React from 'react';
import hero6 from './assets/Rectangle 17.jpg'
import './Container1.css'

function container1() {
    return (
        <div className="container">
            <div className="head">
                <h1>Innovation at its best!</h1>
                <p>We pride ourselves in discovering new trails of success by turning ideas, into digital realities to create a solution that is customer-centric. Leveraging on our rich technical expertise.
                    We are an internal incubator that builds digital products to help solve problems in Africa,  primarily focused on Blockchain, Artificial intelligence and Finance.</p>
                <button>About Naakwu</button>
            </div>
            <div>
                <img className="Imagecon" src={hero6} alt="Logo1" />
            </div>
        </div>
    );
}

export default container1;
