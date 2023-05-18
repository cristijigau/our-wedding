import React from 'react';

import './index.scss';

const Landing = () => {
  return (
    <div className="landing">
      <div className="welcome_section">
        <div className="image_overlay">
          <div className="covercontent">
            <span>CRISTIAN & ANA</span>
            <span>Pasiune | Fericire | Eternitate</span>
            <span>20 OCTOMBRIE 2023, CHIȘINĂU</span>
          </div>
          <svg
            role="presentation"
            className="arrow_svg"
            x="0px"
            y="0px"
            width="38.417px"
            height="18.592px"
            viewBox="0 0 38.417 18.592"
          >
            <g>
              <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path>
            </g>
          </svg>
        </div>
      </div>
      <section className="first_section">
        <p className="message">
          Vino și bucură-te de o seară plină de surprize culinare rafinate,
          <br />
          acompaniată de o selecție muzicală impecabilă. Un spectacol vizual
          impresionant,
          <br /> unde dansurile și energia pozitivă se vor contopi într-o
          atmosferă de neuitat.
        </p>
      </section>
      <section className="second_section">
        <div className="card">
          <span className="title">1 seară</span>
          <hr />
          <span className="description">
            Experimentează o seară plină de energie contagioasă și pozitivă
          </span>
        </div>
        <div className="card">
          <span className="title">2 îndrăgostiți</span>
          <hr />
          <span className="description">
            Bucură-te de frumusețea și căldura iubirii noastre
          </span>
        </div>
        <div className="card">
          <span className="title">100+ invitați</span>
          <hr />
          <span className="description">
            Alătură-te nouă și celor dragi în momentul nostru special
          </span>
        </div>
        <div className="card">
          <span className="title">
            <span className="infinity">∞</span> emoții
          </span>
          <hr />
          <span className="description">
            Îți dorim o experiență plină de emoții de neuitat
          </span>
        </div>
      </section>
      <section className="third_section"></section>
    </div>
  );
};

export default Landing;
