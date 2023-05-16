import React, { useState } from 'react';

const MenuItems = () => {
  const [selected, setSelected] = useState('1');

  const handleClick = e => {
    setSelected(e.target.id);
  };

  return (
    <>
      <a
        href="#section1"
        className={selected === '1' ? 'selected' : ''}
        id="1"
        onClick={handleClick}
      >
        First
      </a>
      <a
        href="#section2"
        className={selected === '2' ? 'selected' : ''}
        id="2"
        onClick={handleClick}
      >
        Second
      </a>
      <a
        href="#section3"
        className={selected === '3' ? 'selected' : ''}
        id="3"
        onClick={handleClick}
      >
        Third
      </a>
      <a
        href="#section4"
        className={selected === '4' ? 'selected' : ''}
        id="4"
        onClick={handleClick}
      >
        Fourth
      </a>
    </>
  );
};

export default MenuItems;
