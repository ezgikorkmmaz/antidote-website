import React from 'react';
import './style.scss';
import ParticlesBg from "particles-bg";

function Header() {
  return (
    <div id='header' className="animated-bg">
        <div className="animated-header">
            <ParticlesBg type="thick" bg={{zIndex: 0, position:"absolute", top:0}} />
            <div className='overlay'>
                <img src='img/developardus-logo.png' alt="Logo" className="logo" />
                <h1 className='header-title'>Antidot Smart Agriculture Systems</h1>
                <button onClick="location.href='#features'">LEARN MORE</button>
            </div>
        </div>
    </div>
  );
}

export default Header;
