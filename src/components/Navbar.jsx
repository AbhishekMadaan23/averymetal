import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledNavbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: ${(props) => (props.isTop ? "absolute" : "fixed")};
  top: ${(props) => (props.isTop ? "35px" : "0")};
  transition: top 0.1s;
  z-index: 100;
`;
const RightDiv = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const LeftDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsTop(currentScrollPos < 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledNavbar isTop={isTop}>
      <LeftDiv>
        <div>Logo</div>
      </LeftDiv>
      <RightDiv>
        <div>Home</div>
        <div>About us</div>
        <div>Purchase info</div>
        <div>Photo</div>
        <div>More</div>
      </RightDiv>
    </StyledNavbar>
  );
};

export default Navbar;
