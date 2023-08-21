import React from 'react';
import './style.scss';
import { Instagram, Linkedin, PhoneCall } from'react-feather';

function Footer() {

  return (
    <div id='contact' className='contact'>
        <div className="contact-content">
            <h2>Contact Us</h2>
            <p>If you have any questions or want to learn more about our offer and prices, feel free to get in touch with us.</p>
            <div className="contact-button">
                <a href="mailto:korknazezgi1999@gmail.com">Contact Us</a>
            </div>
        </div>
        <div className='contact-information'>
            <span>©2023 DEVELOPARDUS</span>
            {/* <img src='img/developardus-logo.png' alt="Logo" className="logo" /> */}
            {/* <div className='social-links'>
                <Instagram size={24}/>
                <Linkedin size={24}/>
                <PhoneCall size={24}/>
            </div> */}
        </div>
       
    </div>
  );
}

export default Footer;
