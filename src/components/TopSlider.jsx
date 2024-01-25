import React, { useState } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100vw;
  height: 80vh;
`;

const images = [
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

const TopSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleLeftClick = () => {
    const isFirstImage = currentImage === 0;
    setCurrentImage(isFirstImage ? images.length - 1 : currentImage - 1);
  };

  const handleRightClick = () => {
    const isLastImage = currentImage === images.length - 1;
    setCurrentImage(isLastImage ? 0 : currentImage + 1);
  };
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <StyledImage src={images[currentImage].url} />
      <div
        style={{
          position: "absolute",
          zIndex: "100",
          top: "50%",
          left: " 20px",
        }}
      >
        <button onClick={handleLeftClick}>{"<"}</button>
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: "100",
          top: "50%",
          right: " 20px",
        }}
      >
        <button onClick={handleRightClick}>{">"}</button>
      </div>
    </div>
  );
};

export default TopSlider;
