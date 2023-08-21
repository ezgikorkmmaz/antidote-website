import React from 'react';
import './style.scss';
import { BatteryCharging } from 'react-feather';

function Features() {
  return (
    <div id='features' className='features-container'>
        <h1>Features</h1>
        <div className="col-container">
            <div className="column">
                <div className='feature-icon'><BatteryCharging size={32}/></div>
                <h2>Lorem ipsum</h2>
                    <span>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</span>
                </div>
            <div className="column">
            <div className='feature-icon'><BatteryCharging size={32}/></div>
                <h2>Lorem ipsum</h2>
                    <span>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</span>
                </div>
            <div className="column">
            <div className='feature-icon'><BatteryCharging size={32}/></div>
                <h2>Lorem ipsum</h2>
                    <span>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</span>
                </div>
            <div className="column">
            <div className='feature-icon'><BatteryCharging size={32}/></div>
                <h2>Lorem ipsum</h2>
                    <span>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</span>
            </div>
        </div>
    </div>
  );
}

export default Features;
