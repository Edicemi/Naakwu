import React from 'react'
import naakwu from './assets/Frame.png'
import github from './assets/Vector (1).svg'
import facebook from './assets/Vector (2).svg'
import twitter from './assets/Vector (3).svg'
import linkedIn from './assets/Group (1).svg'
import Instagram from './assets/Group (2).svg'

import './Footer.css'

function Footer() {
  return (
    <div className='footer'>  
    <h1>Save</h1>
        <img className="Naakwu" src={naakwu} alt="Logo1" />
        <div className='footer-icons'>
        <img className="icons" src={github} alt="Logo1" />
        <img className="icons" src={facebook} alt="Logo1" />
        <img className="icons" src={twitter} alt="Logo1" />
        <img className="icons" src={linkedIn} alt="Logo1" />
        <img className="icons" src={Instagram} alt="Logo1" />
        </div>
    </div>
  )
}

export default Footer