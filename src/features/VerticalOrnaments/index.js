import React from 'react';
import './index.scss';

import firstIcon from '../../assets/icons/cheers.png';
import secondIcon from '../../assets/icons/close.png';
import thirdIcon from '../../assets/icons/dance.png';
import fourthIcon from '../../assets/icons/dove.png';
import fifthIcon from '../../assets/icons/hall.png';
import sixthIcon from '../../assets/icons/hamburger.png';
import seventhIcon from '../../assets/icons/marriage.png';
import eighthIcon from '../../assets/icons/champagne-glass.png';
import ninethIcon from '../../assets/icons/marriage.png';
import tenthIcon from '../../assets/icons/dance.png';

const VerticalOrnaments = () => {
  return (
    <div className="stages">
      <ul>
        <div className="stage">
          <img src={firstIcon} className="ornament_icon" alt="icon" />
          <span className="stage_description">Întâmpinarea Oaspeților</span>
        </div>
        <div className="vertical_line" />
        <div className="stage">
          <img src={secondIcon} className="ornament_icon" alt="icon" />
          <span className="stage_description">Înscriere și Jurăminte</span>
        </div>
        <div className="vertical_line" />
        <div className="stage">
          <img src={thirdIcon} className="ornament_icon" alt="icon" />
          <span className="stage_description">Sesiunea Foto + Selfie Box</span>
        </div>
        <div className="vertical_line" />
        <div className="stage">
          <img src={fourthIcon} className="ornament_icon" alt="icon" />
          <span className="stage_description">
            Șampanie, Fourchette și Candy Bar
          </span>
        </div>
        <div className="vertical_line" />
        <div className="stage">
          <img src={fifthIcon} className="ornament_icon" alt="icon" />
          <span className="stage_description">Dansul Mirilor</span>
        </div>
        <div className="vertical_line" />
        <div className="stage">
          <img src={sixthIcon} className="ornament_icon" alt="icon" />
          <span className="stage_description">Masa Festivă</span>
        </div>
        <div className="vertical_line" />
        <div className="stage">
          <img src={seventhIcon} className="ornament_icon" alt="icon" />
          <span className="stage_description">Multă Distracție</span>
        </div>
        <div className="vertical_line" />
        <div className="stage">
          <img src={eighthIcon} className="ornament_icon" alt="icon" />
          <span className="stage_description">Tăierea Tortului</span>
        </div>
        <div className="vertical_line" />
        <div className="stage">
          <img src={ninethIcon} className="ornament_icon" alt="icon" />
          <span className="stage_description">Petrecerea Continuă</span>
        </div>
        <div className="vertical_line" />
        <div className="stage">
          <img src={tenthIcon} className="ornament_icon" alt="icon" />
          <span className="stage_description">Încheiere Nunții</span>
        </div>
      </ul>
    </div>
  );
};

export default VerticalOrnaments;
