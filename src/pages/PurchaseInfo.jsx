import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  padding: 16px 0px;
`;

const PurchaseInfo = () => {
  return (
    <div>
      <Header />
      <Container>
        <Navbar />
      </Container>
      <Products />
    </div>
  );
};

export default PurchaseInfo;
