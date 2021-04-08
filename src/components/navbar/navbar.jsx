import React, { useState } from "react";
import CloseMenu from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../assets/evolvinglogo.png'
import "../navbar/navbar.css";
import {Link} from 'react-router-dom';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <img className="logo" src={Logo} />
          </a>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/" className="option-text">HOME</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="service" className="option-text">SERVICES</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="package" className="option-text">PACKAGES</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="about-us" className="option-text">ABOUT US</Link>
          </li>
          <li className=" option " onClick={closeMobileMenu}>
            <Link to="contact-us" className="option-text">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;