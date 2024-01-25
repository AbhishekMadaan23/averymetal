import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #15733f;
  width: 100%;
  height: 25px;
  color: white;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h3>WELCOME TO MIZAN METALS</h3>
    </StyledHeader>
  );
};

export default Header;
