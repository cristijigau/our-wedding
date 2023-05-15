import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = ({ handleCloseMainPage }) => {
  const navigate = useNavigate();

  return (
    <section className="main_section">
      <div className="image_overlay">
        <div className="welcome_section">
          <h5>Noi ne căsătorim!</h5>
          <h1>Cristian și Ana</h1>
          <h5>20 | octombrie | 2023</h5>
          <h5>Restaurant Avegarden, str. Socoleni 5/3</h5>

          <button
            className="main_action_button"
            onClick={() => {
              navigate('/home');
            }}
          >
            <svg
              width="200px"
              height="46px"
              viewBox="0 0 200 46"
              class="border"
            >
              <polyline points="200,0 200,46 0,46 0,0 200,0" class="bg-line" />
              <polyline points="200,0 200,46 0,46 0,0 200,0" class="hl-line" />
            </svg>
            <span>Deschide</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
