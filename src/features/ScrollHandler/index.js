import React, { useEffect, useRef } from "react";
import "intersection-observer"; // Import the polyfill for older browsers

const ScrollHandler = ({ onScrollToSection }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger the callback when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onScrollToSection(); // Invoke the callback when the section is visible
        }
      });
    }, options);

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current); // Clean up the observer when the component unmounts
    };
  }, [onScrollToSection]);

  return <div ref={sectionRef} />;
};

export default ScrollHandler;
