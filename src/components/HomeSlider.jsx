import React, { useState } from "react";
import styled from "styled-components";
import Dummy from "./Dummy";

const imageUrl =
  "https://th.bing.com/th/id/OIP.m9mri6VqfEGqaS6m7z6H1QHaE8?rs=1&pid=ImgDetMain";

const sliderImages = [
  {
    url: "https://th.bing.com/th/id/OIP.m9mri6VqfEGqaS6m7z6H1QHaE8?rs=1&pid=ImgDetMain",
  },
  {
    url: "https://th.bing.com/th/id/OIP.f9FAxYywuG-kdoEuYk005QHaE8?rs=1&pid=ImgDetMain",
  },
  {
    url: "https://lh4.googleusercontent.com/OAbH25TpeH4KXwz9GFUAEa4vu3GoRwlrJcz440gz2LCJDDU1-Z5HqjNcmAf-yVWQXUw_C4S2wepHT54ByhCYKKTY9m_YKOLYJRE8SeeNtEcN88CRKF6O3ilThKjIfStsPUVq9sKZ",
  },
];
const Slider = styled.div`
  width: 100vw;
  height: 80vh;
  overflow: hidden;
`;

const ImageSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  z-index: 100;
  cursor: pointer;
  font-size: 30px;
  color: #fff;
`;

const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  z-index: 100;
  cursor: pointer;
  font-size: 30px;
  color: #fff;
`;

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Slide = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${sliderImages[currentIndex].url});
    background-size: cover;
    background-position: center;
  `;

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    setCurrentIndex(isFirstImage ? sliderImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === sliderImages.length - 1;
    setCurrentIndex(isLastImage ? 0 : currentIndex + 1);
  };
  return (
    <Slider>
      <ImageSlider>
        <LeftArrow onClick={goToPrevious}>❰</LeftArrow>
        <RightArrow onClick={goToNext}>❱</RightArrow>
        <Slide></Slide>
      </ImageSlider>
    </Slider>
  );
};

export default HomeSlider;
