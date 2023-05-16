import React from 'react';
import { useNavigate } from 'react-router-dom';
// import VerticalOrnaments from '../features/VerticalOrnaments';

// import marriageIcon from '../assets/icons/marriage.png';
// import doveIcon from '../assets/icons/dove.png';
// import hallIcon from '../assets/icons/hall.png';
// import cheersIcon from '../assets/icons/cheers.png';
// import mainIcon from '../assets/icons/cheers.png';

const Main = () => {
  const navigate = useNavigate();

  return (
    <section className="main_section">
      <div className="image_overlay">
        <div className="welcome_section">
          {/* <VerticalOrnaments firstIcon={doveIcon} secondIcon={marriageIcon} /> */}
          {/* <img src={mainIcon} className="main_icon" alt="icon" /> */}
          <h5>Noi ne căsătorim!</h5>
          <h1>Cristian și Ana</h1>
          <h5>20 | octombrie | 2023</h5>
          <h5>
            <a href="https://goo.gl/maps/yPtBygbebA5CoGDV7?coh=178573&entry=tt">
              Restaurant Avegarden, str. Socoleni 5/3
            </a>
          </h5>

          <button
            className="main_action_button"
            onClick={() => {
              navigate('/our-wedding/home');
            }}
          >
            <svg
              width="200px"
              height="46px"
              viewBox="0 0 200 46"
              className="border"
            >
              <polyline
                points="199,0 199,46 0,46 0,0 199,0"
                className="bg-line"
              />
              <polyline
                points="199,0 199,46 0,46 0,0 199,0"
                className="hl-line"
              />
            </svg>
            <span>Deschide</span>
          </button>
          {/* <VerticalOrnaments firstIcon={hallIcon} secondIcon={cheersIcon} /> */}
        </div>
      </div>
    </section>
  );
};

export default Main;
