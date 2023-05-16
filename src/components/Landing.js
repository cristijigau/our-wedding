import React from 'react';
import Hamburger from '../features/Hamburger';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';

const Landing = () => {
  return (
    <div>
      <Hamburger />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
};

export default Landing;
