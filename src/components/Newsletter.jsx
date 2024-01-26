import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  height: 30vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 70%;
  width: 70%;
  background-color: #fff;
  text-align: left;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const Copyright = styled.div`
  background-color: #fff;
  height: 30%;
  text-align: center;
`;

const Newsletter = () => {
  return (
    <Container>
      <Wrapper>
        <h1 style={{ marginBottom: "20px" }}>CONNECT WITH US</h1>
        <hr />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Logo src="https://s3.amazonaws.com/freebiesupply/large/2x/facebook-logo-circle-transparent.png" />
        </div>
      </Wrapper>
      <Copyright>
        Copyright © 2023 AL MIZAN AL THAHBI METAL SCRAP TR LLC- All Rights
        Reserved.
      </Copyright>
    </Container>
  );
};

export default Newsletter;
