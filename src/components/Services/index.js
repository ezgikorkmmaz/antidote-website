import React from 'react';
import './style.scss';
import { BatteryCharging } from 'react-feather';

function Services() {
  return (
    <div id='services' className='services-container'>
        <div className='title-section'>
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <div className='service-icon'><BatteryCharging size={24}/></div>
            <h2>Item 1</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
            </p>
          </div>
          <div className="grid-item">
          <div className='service-icon'><BatteryCharging size={24}/></div>
            <h2>Item 1</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
            </p>
          </div>
          <div className="grid-item">
          <div className='service-icon'><BatteryCharging size={24}/></div>
            <h2>Item 1</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
            </p>
          </div>
          <div className="grid-item">
          <div className='service-icon'><BatteryCharging size={24}/></div>
            <h2>Item 1</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
            </p>
          </div>
          <div className="grid-item">
          <div className='service-icon'><BatteryCharging size={24}/></div>
            <h2>Item 1</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
            </p>
          </div>
          <div className="grid-item">
          <div className='service-icon'><BatteryCharging size={24}/></div>
            <h2>Item 1</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
            </p>
          </div>
        </div>
    </div>
  );
}

export default Services;
