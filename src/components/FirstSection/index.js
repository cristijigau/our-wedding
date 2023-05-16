import React from 'react';
import './index.scss';
import Nav from '../../features/Nav';
import Countdown from '../../features/CountDown';

const FirstSection = () => {
  return (
    <div className="first_section" id="1">
      <div className="image_overlay">
        <div className="upper_section">
          <div className="logo">
            <h3>C | A</h3>
          </div>
          <Nav />
        </div>
        <h1>Cristian și Ana</h1>
        <h5>20 | octombrie | 2023</h5>
        <Countdown />
      </div>
    </div>
  );
};

export default FirstSection;
