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
      <section className="third_section">
        <h1>Unde va avea loc evenimentul?</h1>
        <p>
          Cu o amplasare convenabilă în orașul Chișinău,
          <a href="https://avegarden.md/" target="_blank" rel="noreferrer">
            {` Restaurantul Avegarden `}
          </a>
          impresionează prin designul său modern și spațiul generos oferit.
        </p>
      </section>
      <section className="location">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.90072787018!2d28.847768576303853!3d47.06179767114503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97ddfe95690c5%3A0xac60947a8d909966!2sAve%20Garden!5e0!3m2!1sro!2s!4v1684439656663!5m2!1sro!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </section>
    </div>
  );
};

export default Landing;
