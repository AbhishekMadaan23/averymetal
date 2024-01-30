import React from "react";
import styled from "styled-components";

const data = {
  url: "https://www.metalmenrecycling.com.au/wp-content/uploads/2019/03/shutterstock_201953053-e1501224723169.jpg",
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 80%;
`;
const Image = styled.div`
  flex: 1;
  height: 80%;
  width: 100%;
  background-image: url(${data.url});
  background-size: cover;
`;

const StyledHeading = styled.div`
  width: 80%;
  font-size: 1.3rem;
  text-align: left;
`;

const StyledParagraph = styled.div`
  text-align: left;
  display: inline-block;
  line-height: 1.5;
  width: 70%;
  font-size: 1.2rem;
  font-weight: 600;
`;

const About = () => {
  return (
    <Container>
      <Info>
        <StyledHeading>
          <strong>LICENSED SCRAP METAL MERCHANT.</strong>
          <hr style={{ margin: "15px 0px 25px 0px" }} />
        </StyledHeading>

        <StyledParagraph>
          <ul>
            <li>
              Established in 1985 and every year proudly we are importing and
              exporting 30,000 tonnes of metal scrap.
            </li>
            <li>
              We specialise in the handling processing and trading of
              non-ferrous metals.
            </li>
            <li style={{ margin: "15px 0px" }}>
              At al mizan al thahbi metal scrap tr llc company is a family run
              business based in Sharjah, uae and Delhi India that has been
              operating for more than 30 years in the scrap metal industry.{" "}
            </li>
            <li style={{ margin: "15px 0px" }}>
              We pride ourselves on being one of the top scrap metal merchants
              in Delhi,India and Sharjah,Uae that offer highly competitive
              prices on all types of scrap metal.
            </li>
            <li style={{ margin: "15px 0px" }}>
              {" "}
              At al mizan al thahbi metal scrap tr llc Company, we can
              accommodate any volume of scrap metal delivered to our yard, or
              alternatively we can collect and buy from you. We buy from local
              trades and business, scrap metal merchants.
            </li>
            <li style={{ margin: "15px 0px" }}>
              We are the top scrap metal merchant, buyers & dealers in Sharjah.
              We will provide the best prices for your Non-Ferrous Metals.{" "}
            </li>
          </ul>
        </StyledParagraph>
      </Info>
      <Image></Image>
    </Container>
  );
};

export default About;
