import React from "react";

import './Learning.css'
function Learning(props) {
  return (
      <div className='Learning'>
                <img className='app' src={props.src} alt={props.app}/>
                <h5 className='card_heading'>{props.heading}</h5>
                <p className='card_description'>{props.description}</p>
                <p className="card_footer">{props.footer}</p>
                <p className="card_footer2">{props.footer2}</p>
            </div>
  );
}

export default Learning;
