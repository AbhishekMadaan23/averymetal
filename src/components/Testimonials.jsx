import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";

const data = [
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/2021.12.10_2353_black_sweter_6.jpg/:/cr=t:0%25,l:48.48%25,w:35.71%25,h:23.81%25/rs=w:100,h:100,cg:true,m",
    review: "Excellent service",
    rating: 5,
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/pexels-photo-6822987.jpeg/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100",
    review:
      "Always a great service, very helpful and friendly staff. Access is good and makes it easy to be in and out quickly",
    rating: 5,
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/pexels-jeff-denlea-3714743.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:66.64%25/rs=w:100,h:100,cg:true",
    review:
      "Very good experience Staff professional and friendly Definitely use this company for future trades",
    rating: 5,
  },
];
const Container = styled.div`
  margin-top: 20px;
  height: 70vh;
  width: 100%;
  background-color: #15733f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.div`
  color: white;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  padding: 10px 0px;
`;

const Wrapper = styled.div`
  height: 50%;
  width: 70%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const StyledTestimonials = styled.div`
  height: 100%;
  width: 25%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledImage = styled.img`
  border-radius: 50%;
`;
const StyledText = styled.div`
  width: 90%;
  text-align: center;
  padding: 0 10px;
`;

const Testimonials = () => {
  return (
    <Container>
      <StyledHeading>Testimonials</StyledHeading>
      <Wrapper>
        {data.map((item) => (
          <StyledTestimonials>
            <StyledImage src={item.url} />
            <Rating name="read-only" value={item.rating} readOnly />
            <StyledText>
              <i>{item.review}</i>
            </StyledText>
          </StyledTestimonials>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
