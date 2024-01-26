import React, { useState } from "react";
import styled from "styled-components";

const data = [
  {
    url: "https://flagpedia.net/data/flags/w580/us.webp",
  },
  {
    url: "https://flagpedia.net/data/flags/w580/gb.webp",
  },
  {
    url: "https://flagpedia.net/data/flags/w580/ca.webp",
  },
  {
    url: "https://flagpedia.net/data/flags/w580/fr.webp",
  },
  {
    url: "https://flagpedia.net/data/flags/w580/de.webp",
  },
  {
    url: "https://flagpedia.net/data/flags/w580/it.webp",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;

  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled.div`
  color: #15733f;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  padding: 5px 0px;
`;

const Wrapper = styled.div`
  padding: 10px;
  position: relative;

  height: 90%;
  width: 70%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarasouelItem = styled.div`
  background-size: cover;
  background-color: green;
  height: 100%;
  margin: 0px 10px;
  width: 30%;
  background-image: url(${(props) => props.url});
`;
const Carasouel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastImage = currentIndex === data.length - 3;
    setCurrentIndex(isLastImage ? 0 : currentIndex + 1);
  };
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    setCurrentIndex(isFirstImage ? data.length - 3 : currentIndex - 1);
  };

  const LeftArrow = styled.div`
    position: absolute;
    left: 0;
    z-index: 100;
    cursor: pointer;
    font-size: 30px;
    color: #15733f;
  `;
  const RightArrow = styled.div`
    position: absolute;
    right: 0;
    z-index: 100;
    cursor: pointer;
    font-size: 30px;
    color: #15733f;
  `;
  return (
    <Container>
      <StyledHeading>Countries we deal with</StyledHeading>
      <Wrapper>
        <LeftArrow onClick={goToPrevious}>❰</LeftArrow>
        {data.map((item, index) => {
          if (index >= currentIndex) {
            return index < currentIndex + 3 ? (
              <CarasouelItem url={item.url}></CarasouelItem>
            ) : null;
          }
        })}
        <RightArrow onClick={goToNext}>❱</RightArrow>
      </Wrapper>
    </Container>
  );
};

export default Carasouel;
