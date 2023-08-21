import React from 'react';
import './style.scss';

function About() {
    const reasons = [
    "Experienced Professionals",
    "High-Quality Products",
    "Excellent Customer Support",
    "Affordable Pricing",
    "Quick and Reliable Service",
    "High-Quality Products"
  ];

  return (
      <div id='about' className="about-content">

        <div className='about-us-container'>
            <div className='image-container'>
                <img src='img/logo-antidot.png' alt='' />
            </div>
                
            <div className='text-container'>
                <h2>About Us</h2>
                <p>
                Welcome to our website! We are a passionate team dedicated to providing the best products and services to our customers. Our journey began with a vision to make a difference in the world and offer unique solutions that meet your needs.
                </p>
                <p>
                Our mission is to deliver excellence in everything we do. We believe in innovation, quality, and customer satisfaction. With a strong commitment to our values, we aim to create a positive impact on the lives of our customers and the community.
                </p> 
                
                <div className='why-choose-us'>
                    <h1>Why Choose Us</h1>
                    <div className="reasons">
                        <div className="column">
                        {reasons.slice(0, Math.ceil(reasons.length / 2)).map((reason, index) => (
                            <div key={index} className="reason-item">
                            <span className="bullet">&#8226;</span>
                            <span className="reason-text">{reason}</span>
                            </div>
                        ))}
                        </div>
                        <div className="column">
                        {reasons.slice(Math.ceil(reasons.length / 2)).map((reason, index) => (
                            <div key={index} className="reason-item">
                            <span className="bullet">&#8226;</span>
                            <span className="reason-text">{reason}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

export default About;
