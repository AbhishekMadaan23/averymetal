import React from "react";
import styled from "styled-components";

const firstRowData = [
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/1520195771560.jfif/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:365,h:365,cg:true",
    heading: "Aluminium trump",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/brass-honey-scrap-2025846.jpg/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
    heading: "Brass",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/alu-rims-x-f9f.jpg/:/cr=t:0%25,l:13.22%25,w:73.56%25,h:100%25/rs=w:365,h:365,cg:true",
    heading: "Aluminium wheels",
  },
];

const secondRowData = [
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/IMG_2666%20(Small).JPG/:/cr=t:5.36%25,l:16.52%25,w:66.96%25,h:89.29%25/rs=w:365,h:365,cg:true,m",
    heading: "Ubc",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/P1140090.JPG/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:365,h:365,cg:true",
    heading: "Zorba",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-02-24%20at%2009.16.20%20(2).jpeg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:365,h:365,cg:true",
    heading: "Aluminium Taint tabour",
  },
];

const Description = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
`;
const DescriptionHeading = styled.div`
  width: 70%;
  font-size: 1.4rem;
  font-weight: 550;
  margin-bottom: 1rem;
`;
const DescriptionText = styled.p`
  width: 45%;
  font-weight: bolder;
  overflow-wrap: break-word;
  letter-spacing: 0.5px;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledProductRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-top: 3rem;
`;
const StyedCard = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardHeading = styled.div`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  color: rgb(94, 94, 94);
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 50%;
  background-size: cover;
`;
const Button = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const ButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
  background-color: #15733f;
  padding: 1rem;
  font-weight: bold;

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
const Footer = styled.div`
  margin: 2rem 0rem;
`;
const Products = () => {
  return (
    <div>
      <Description>
        <DescriptionHeading>What we buy & sell</DescriptionHeading>
        <DescriptionText>
          We buy & sell All Non ferrous metal scrap at competitive prices for
          more information get in touch with us Here
        </DescriptionText>
      </Description>
      <Content>
        <StyledProductRow>
          {firstRowData.map((item) => {
            return (
              <StyedCard>
                <CardImage src={item.url} alt="product" />
                <CardHeading>{item.heading}</CardHeading>
              </StyedCard>
            );
          })}
        </StyledProductRow>
      </Content>
      <Content>
        <StyledProductRow>
          {secondRowData.map((item) => {
            return (
              <StyedCard>
                <CardImage src={item.url} alt="product" />
                <CardHeading>{item.heading}</CardHeading>
              </StyedCard>
            );
          })}
        </StyledProductRow>
      </Content>
      <Button>
        <ButtonText>GET IN TOUCH</ButtonText>
      </Button>
      <Footer>
        Copyright © 2023 AL MIZAN AL THAHBI METAL SCRAP TR LLC- All Rights
        Reserved.
      </Footer>
    </div>
  );
};

export default Products;
