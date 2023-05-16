import React from 'react';
import './index.scss';

const VerticalOrnaments = ({ firstIcon, secondIcon }) => {
  return (
    <ul>
      <img src={firstIcon} className="ornament_icon" alt="icon" />
      <div className="vertical_line" />
      <img src={secondIcon} className="ornament_icon" alt="icon" />
    </ul>
  );
};

export default VerticalOrnaments;
