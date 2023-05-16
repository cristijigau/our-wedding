import React from 'react';
import './index.scss';
import MenuItems from '../MenuItems';

const Nav = () => {
  return (
    <div className="navigation">
      <div className="links">
        <MenuItems />
      </div>
    </div>
  );
};

export default Nav;
