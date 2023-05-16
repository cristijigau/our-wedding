import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuItems = () => {
  const [selected, setSelected] = useState('1');

  const navigate = useNavigate();

  const handleClick = e => {
    setSelected(e.target.id);
    navigate(`#${e.target.id}`);
  };

  return (
    <>
      <li
        className={selected === '1' ? 'selected' : ''}
        id="1"
        onClick={handleClick}
      >
        First
      </li>
      <li
        className={selected === '2' ? 'selected' : ''}
        id="2"
        onClick={handleClick}
      >
        Second
      </li>
      <li
        className={selected === '3' ? 'selected' : ''}
        id="3"
        onClick={handleClick}
      >
        Third
      </li>
      <li
        className={selected === '4' ? 'selected' : ''}
        id="4"
        onClick={handleClick}
      >
        Fourth
      </li>
    </>
  );
};

export default MenuItems;
