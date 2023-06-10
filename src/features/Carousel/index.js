import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

import firstImage from "../../assets/images/1.jpg";
import secondImage from "../../assets/images/2.jpg";
import thirdImage from "../../assets/images/3.jpg";
import fourthImage from "../../assets/images/4.jpg";
import fifthImage from "../../assets/images/5.jpg";
import sixthImage from "../../assets/images/6.jpg";
import seventhImage from "../../assets/images/7.jpg";

import rightChevron from "../../assets/icons/right-chevron.png";
import leftChevron from "../../assets/icons/left-chevron.png";

import "./index.scss";

const images = [
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
  seventhImage,
];

const Carousel = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleRightClick(),
    onSwipedRight: () => handleLeftClick(),
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
            className={`dot ${index === selectedImage ? "selected" : ""}`}
            key={`dot-${index}-${image}`}
          />
        ))}
      </div>
      <div className="left_button" onClick={handleLeftClick}>
        <img src={leftChevron} alt="left chevron" className="left_chevron" />
      </div>
      {images.map((image, index) => (
        <img
          key={index}
          src={images[index]}
          alt="carousel_slide"
          className="carousel_slide"
          style={{
            width: selectedImage === index ? "100%" : "0",
            transition: "width 0.2s ease",
          }}
        />
      ))}
      <div className="right_button" onClick={handleRightClick}>
        <img src={rightChevron} alt="right chevron" className="right_chevron" />
      </div>
    </div>
  );
};

export default Carousel;
