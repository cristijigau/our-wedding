// import React, { useState } from 'react';
// // import { HashLink } from 'react-router-hash-link';

// const MenuItems = () => {
//   const [selected, setSelected] = useState('1');

// //   const handleClick = e => {
//     setSelected(e.target.id);
//   };

//   const scrollWithOffset = el => {
//     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
//     const yOffset = -50;
//     window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
//   };

//   return (
//     <>
//       <HashLink
//         to="#section1"
//         className={selected === '1' ? 'selected' : ''}
//         id="1"
//         onClick={handleClick}
//         scroll={el => scrollWithOffset(el)}
//       >
//         First
//       </HashLink>
//       <HashLink
//         to="#section2"
//         className={selected === '2' ? 'selected' : ''}
//         id="2"
//         onClick={handleClick}
//         scroll={el => scrollWithOffset(el)}
//       >
//         Second
//       </HashLink>
//       <HashLink
//         to="#section3"
//         className={selected === '3' ? 'selected' : ''}
//         id="3"
//         onClick={handleClick}
//         scroll={el => scrollWithOffset(el)}
//       >
//         Third
//       </HashLink>
//       <HashLink
//         to="#section4"
//         className={selected === '4' ? 'selected' : ''}
//         id="4"
//         onClick={handleClick}
//         scroll={el => scrollWithOffset(el)}
//       >
//         Fourth
//       </HashLink>
//     </>
//   );
// };

// export default MenuItems;
