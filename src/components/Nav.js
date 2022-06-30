import React, { useState } from "react";
import logo from "./assets/Frame 7.jpg";
import "./Nav.css";
const  Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="nav-logo" src={logo} alt="Logo" />
      <div className={`nav-menu ${isOpen && "open"}`}>
      <ul className="nav-items">
        <li className="nav-links">
          <a href="/">Our Solution</a>
        </li>
        <li className="nav-links">
          <a href="/">Our blog</a>
        </li>
        <li className="nav-links">
          <a href="/">About us</a>
        </li>
        </ul>

       <button id="contact">Contact us</button>
       </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Nav;
