import React, { useRef } from "react";
import "./index.scss";
import confetti from "canvas-confetti";

import timeline from "../../assets/images/timeline.jpg";
import CarouselComponent from "../../features/Carousel";
import Questions from "../../features/Questions";
import CountDown from "../../features/CountDown";
import ScrollHandler from "../../features/ScrollHandler";
import clockIcon from "../../assets/icons/clock.png";

const Landing = () => {
  const firstSectionRef = useRef(null);

  const shootConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="landing">
      <div className="welcome_section">
        <div className="image_overlay">
          <div className="covercontent">
            <span>CRISTIAN & ANA</span>
            <span>Pasiune. Fericire. Eternitate.</span>
            <span>20 OCTOMBRIE 2023, CHIȘINĂU</span>
            <span className="hour">
              <img src={clockIcon} className="clock_icon" alt="clock" /> 17:00
            </span>
          </div>
          <svg
            role="presentation"
            className="arrow_svg"
            x="0px"
            y="0px"
            width="38.417px"
            height="18.592px"
            viewBox="0 0 38.417 18.592"
            onClick={() => {
              firstSectionRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <g>
              <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path>
            </g>
          </svg>
        </div>
      </div>
      <section className="first_section" ref={firstSectionRef}>
        <p className="message">
          Vino și bucură-te de o seară plină de surprize culinare rafinate,
          acompaniată de o selecție muzicală impecabilă. Un spectacol vizual
          impresionant, unde dansurile și energia pozitivă se vor contopi într-o
          atmosferă de&nbsp;neuitat.
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
        <div className="map_overlay">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.90072787018!2d28.847768576303853!3d47.06179767114503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97ddfe95690c5%3A0xac60947a8d909966!2sAve%20Garden!5e0!3m2!1sro!2s!4v1684439656663!5m2!1sro!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
        </div>
      </section>
      <section className="schedule">
        <h1>Programul Evenimentului</h1>
        <p>
          Fiecare detaliu a fost meticulos planificat și implementat pentru a
          asigura ca momentul nostru special să fie deosebit și de durată în
          memoria noastră și a celor&nbsp;dragi.
        </p>
        {/* <VerticalOrnament /> */}
        <img src={timeline} alt="timeline" className="timeline" />
      </section>
      <section className="love_story">
        <h1>Cronica Iubirii Noastre</h1>
        <p>
          Cristian și Ana s-au întâlnit la gimnaziu în clasa a 7-a, când aveau
          doar 13 ani. Ceea ce a început ca o prietenie frumoasă și glume la
          pauzele dintre lecții a evoluat rapid într-o relație specială. Pe
          măsură ce timpul a trecut, s-au cunoscut din ce în ce mai bine și au
          descoperit o conexiune profundă și autentică între ei.
        </p>
        <p>
          De-a lungul a doi ani, legătura lor a crescut și s-a transformat
          într-o relație romantică. În ciuda provocărilor studiilor superioare,
          care i-au separat geografic pentru o perioadă, iubirea lor s-a
          întărit. Fiecare zi petrecută departe unul de celălalt a întărit
          dorința lor de a fi împreună și de a construi un viitor comun.
        </p>
        <p>
          Pe data de 7 august 2022, într-un loc magic și pitoresc de pe coasta
          orasului Kotor din Muntenegru, Cristian a făcut un pas important în
          povestea lor de dragoste. A ales acea zi specială pentru a-i cere mâna
          Anei în căsătorie. Momentul a fost plin de emoție și bucurie, iar Ana
          a acceptat cu inima deschisă.
        </p>
        <p>
          Acum, Cristian și Ana doresc să sărbătorească această etapă importantă
          a vieții lor alături de cei mai apropiați prieteni și familie. Acești
          oameni speciali sunt martorii și susținătorii în călătoria lor de
          dragoste. Prin nunta lor, ei doresc să împărtășească bucuria și
          fericirea cu cei dragi, într-o atmosferă de iubire și armonie.
        </p>
        <CarouselComponent />
        <h2>
          Apropo, linkul cu pozele de la nuntă urmează a fi postat aici:
          <br />
          🔗📸
        </h2>
      </section>
      <section className="countdown_section">
        <h1>Până la eveniment au mai rămas...</h1>
        <CountDown />
        <ScrollHandler
          onScrollToSection={() => {
            shootConfetti();
          }}
        />
      </section>
      <section className="parallax_scrolling">
        <div className="parallax_overlay">
          <h1>Vă așteptăm cu drag!</h1>
        </div>
      </section>
      <section className="questions">
        <h2>Întrebări Frecvente</h2>
        <Questions />
      </section>
      <footer>
        <p>Cristian și Ana sunt creatorii acestui site.</p>
      </footer>
    </div>
  );
};

export default Landing;
