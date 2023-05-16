import React from 'react';
import './index.scss';
import MenuItems from '../MenuItems';

const Nav = () => {
  return (
    <div className="navigation">
      <ul>
        <MenuItems />
      </ul>
    </div>
  );
};

export default Nav;
