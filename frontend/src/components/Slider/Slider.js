import React, { useState } from "react";
import styled from "styled-components";
import {
    FaChevronRight,
    FaChevronLeft,
  } from "react-icons/fa";
  

const SlideImage = styled.img`
    max-width: 95%;    
`;

const StyledSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider>
      <FaChevronLeft
        className="left-arrow"
        onClick={prevSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <SlideImage src={slide} alt="" />
            )}
          </div>
        );
      })}
      <FaChevronRight
        className="right-arrow"
        onClick={nextSlide}
      />
      
    </StyledSlider>
  );
};

export default Slider;
