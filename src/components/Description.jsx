import React from "react";
import styled from "styled-components";

const StyledDescription = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
  margin-right: 25px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 30%;
  background-color: #15733f;
  margin-left: 25px;
  font-size: 1.5em;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 2px solid #15733f;
  &:hover {
    background-color: white;
    color: green;
    border: 2px solid #15733f;
  }
`;

const Description = () => {
  return (
    <StyledDescription>
      <DescriptionText>
        <div style={{ fontSize: "2em", fontWeight: "bold", textAlign: "left" }}>
          BUYER OF FERROUS & NON-FERROUS METALS IN SHARJAH UAE
        </div>
      </DescriptionText>
      <Button>Find out more</Button>
    </StyledDescription>
  );
};

export default Description;
