import React, { useEffect, useState } from "react";
import styled from "styled-components";

const slideImages = [
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.35.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.36.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.59.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.56.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.35.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.36.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.59.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.56.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.35.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.36.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.59.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.56.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.35.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.36.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.59.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.56.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
];

const StyledHeadingContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.div`
  width: 60%;

  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledHr = styled.hr`
  margin: 1rem auto 3rem;
  width: 60%;
`;

const Slider = styled.div`
  height: 60vh;
  width: 100%;
`;

const SliderDiv = styled.div`
  position: relative;
  height: 100%;
  width: 60%;
  overflow: hidden;
  margin: 0 auto;
`;

const SliderWrapper = styled.div`
  position: relative;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  transition: transform 1s ease-in-out;
  transform: ${(props) => `translateX(-${props.index * 100}%)`};
`;

const Slide = styled.div`
  height: 100%;
  min-width: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const NextButton = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  text-align: center;
  font-size: 1.5em;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const PrevButton = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  text-align: center;
  font-size: 1.5em;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  margin: 1rem 0 6rem 0;
  height: 8vh;
  width: 100%;
`;

const SliderArea = styled.div`
  position: relative;
  height: 100%;
  width: 60%;
  overflow: hidden;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  transition: transform 1s ease-in-out;
  transform: ${(props) => `translateX(-${props.index * 5}%)`};
`;

const Image = styled.div`
  height: 100%;
  min-width: 5%;
  margin: 0 0.5rem;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;
const Footer = styled.div`
  margin: 2rem auto 4rem auto;
`;

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bottomSliderIndex, setBottomSliderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    setCurrentIndex(isFirstImage ? slideImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === slideImages.length - 1;
    setCurrentIndex(isLastImage ? 0 : currentIndex + 1);
  };

  const shiftRight = () => {
    const isFirstImage = bottomSliderIndex === 0;
    setBottomSliderIndex(
      isFirstImage ? slideImages.length - 1 : bottomSliderIndex - 1
    );
  };
  const shiftLeft = () => {
    const isLastImage = bottomSliderIndex === slideImages.length - 1;
    setBottomSliderIndex(isLastImage ? 0 : bottomSliderIndex + 1);
  };

  return (
    <div>
      <div style={{ height: "25px", padding: "16px 0px" }}></div>
      <StyledHeadingContainer>
        <StyledHeading>PHOTO GALLERY</StyledHeading>
      </StyledHeadingContainer>
      <StyledHr />
      <Slider>
        <SliderDiv>
          <SliderWrapper index={currentIndex}>
            {slideImages.map((image, index) => {
              return <Slide src={image.url} />;
            })}
          </SliderWrapper>
          <PrevButton onClick={goToPrevious}>❰</PrevButton>
          <NextButton onClick={goToNext}>❱</NextButton>
        </SliderDiv>
      </Slider>

      <Container>
        <SliderArea>
          <Wrapper index={bottomSliderIndex}>
            {slideImages.map((image, index) => (
              <Image
                src={image.url}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              />
            ))}
          </Wrapper>
          <PrevButton onClick={shiftRight}>❰</PrevButton>
          <NextButton onClick={shiftLeft}>❱</NextButton>
        </SliderArea>
      </Container>
      <Footer>
        Copyright © 2023 AL MIZAN AL THAHBI METAL SCRAP TR LLC- All Rights
        Reserved.
      </Footer>
    </div>
  );
};

export default PhotoGallery;
