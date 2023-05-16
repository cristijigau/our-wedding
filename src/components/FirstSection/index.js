import React from 'react';
import './index.scss';
import Countdown from '../../features/CountDown';

const FirstSection = () => {
  return (
    <>
      <div className="our_image" />
      <div className="first_section">
        <div className="upper_section"></div>
        <h1>Cristian și Ana</h1>
        <h5>20 | octombrie | 2023</h5>
        <Countdown />
      </div>
    </>
  );
};

export default FirstSection;
