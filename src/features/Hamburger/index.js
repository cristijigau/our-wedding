import React from 'react';
import './index.scss';
import MenuItems from '../MenuItems';

const Hamburger = () => {
  return (
    <section className="hamburger_nav">
      <div className="logo">
        <h3>C | A</h3>
      </div>
      <input id="menu_toggle" type="checkbox" />
      <label className="menu_button_container" htmlFor="menu_toggle">
        <div className="menu_button"></div>
      </label>
      <ul className="menu">
        <MenuItems />
      </ul>
    </section>
  );
};

export default Hamburger;
