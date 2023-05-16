import React from 'react';
import Hamburger from '../../features/Hamburger';
import FirstSection from '../FirstSection';
import SecondSection from '../SecondSection';
import ThirdSection from '../ThirdSection';
import FourthSection from '../FourthSection';
import Nav from '../../features/Nav';

import './index.scss';

const Landing = () => {
  return (
    <div id="section1">
      <Nav />
      <Hamburger />
      <div className="landing">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </div>
    </div>
  );
};

export default Landing;
