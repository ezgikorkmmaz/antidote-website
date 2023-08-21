import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import { AlignJustify } from 'react-feather';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const isActive = (href) => {
        console.log(href, window.location.hash)
        return window.location.hash === href ? 'active' : '';
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

  return (
    <header id='navbar' className="sticky-header">
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
            <AlignJustify size={24} />
        </div>
        <ul className={`nav-list ${showMenu ? 'active' : ''}`}>
          <li onClick={() => setShowMenu(false)}>
            <a className={isActive('#features')} href="#features">Features</a></li>
          <li onClick={() => setShowMenu(false)}>
            <a className={isActive('#about')} href="#about">About</a></li>
          <li onClick={() => setShowMenu(false)}>
            <a className={isActive('#services')} href="#services">Services</a></li>
          <li onClick={() => setShowMenu(false)}>
            <a className={isActive('#gallery')} href="#gallery">Gallery</a></li>
          <li onClick={() => setShowMenu(false)}>
            <a className={isActive('#contact')} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
