import React from 'react'
import logo from './assets/Frame 7.jpg'
import './Nav.css'
function Nav() {
    return (
        <div className="Navbar">
            <img className="nav-logo" src={logo} alt="Logo" />
            <ul className="nav-menu">
                <li className="nav-links"><a href='#'>Our Solution</a></li>
                <li className="nav-links"><a href='#'>Our blog</a></li>
                <li className="nav-links"><a href='#'>About us</a></li>
            </ul>
            <button>Contact us</button>
        </div >
    )
}

export default Nav