import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import firstImage from '../../assets/images/welcome_img.jpg';
import secondImage from '../../assets/images/couple.jpg';
import thirdImage from '../../assets/images/flowers.jpeg';
import fourthImage from '../../assets/images/restaurant.jpg';
import fifthImage from '../../assets/images/timeline.jpg';

import rightChevron from '../../assets/icons/right-chevron.png';
import leftChevron from '../../assets/icons/left-chevron.png';

import './index.scss';

const images = [firstImage, secondImage, thirdImage, fourthImage, fifthImage];

const Carousel = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleLeftClick(),
    onSwipedRight: () => handleRightClick(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleRightClick = () => {
    if (selectedImage + 1 === images.length) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleLeftClick = () => {
    if (selectedImage === 0) {
      setSelectedImage(images.length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <div className="carousel_container" {...handlers}>
      <div className="dots">
        {images.map((image, index) => (
          <div
            className={`dot ${index === selectedImage ? 'selected' : ''}`}
            key={`dot-${index}-${image}`}
          />
        ))}
      </div>
      <div className="left_button" onClick={handleLeftClick}>
        <img src={leftChevron} alt="left chevron" className="left_chevron" />
      </div>
      <img
        src={images[selectedImage]}
        alt="carousel_slide"
        className="carousel_slide"
      />
      <div className="right_button" onClick={handleRightClick}>
        <img src={rightChevron} alt="right chevron" className="right_chevron" />
      </div>
    </div>
  );
};

export default Carousel;
