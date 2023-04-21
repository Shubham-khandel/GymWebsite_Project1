import React, { useEffect } from "react";

import slider from "./Slider.module.css";

import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100vh",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundAttachment: "fixed",
};

  const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  let effect;
  useEffect(() => {
    effect = setInterval(() => {
      goToNext();
    }, 10000);

    return () => clearInterval(effect);
  }, []);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
};
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  return (
    <div>
      <div>
        <div onClick={goToPrevious} className={slider.leftArrowStyles}>
          {/* ❰ */}
        </div>
        <div onClick={goToNext} className={slider.rightArrowStyles}>
          {/* ❱ */}
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
        <div className={slider.dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              className={slider.dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
