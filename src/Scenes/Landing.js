import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import mainBcg from '../Images/assorted-wine-bottles-1283219.jpg';

const LandingWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgb(67, 198, 172, 0.9), rgb(248, 255, 174, 0.9)),
    url(${mainBcg}) no-repeat fixed;
  background-size: cover;
`;

const StyledBody = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  justify-content: center;
  margin: 70px;
`;

const StyledTitle = styled.div`
  display: flex;
  margin: auto;
  font-size: 45px;
  letter-spacing: 2px;
`;

const StyledSubTitle = styled.div`
  display: flex;
  margin: auto;
  font-size: 25px;
`;

const StyledVideo = styled.iframe`
  width: 750px;
  height: 500px;
  border: none;
  margin: 20px 0 20px 0;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px -2px rgba(0, 0, 0, 0);
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px -2px rgba(0, 0, 0, 0);
`;

const FigmaWrapper = styled.div`
  min-height: 100vh;
  display: grid;
`;

const FigmaTitle = styled.div`
  font-size: 45px;
  color: var(--dark-color);
  margin: auto;
  display: flex;
`;

const Figma = styled.iframe`
  min-height: 70vh;
  width: 100%;
  border: none;
`;

const StyledInput = styled.input`
  display: flex;
  height: 50px;
  margin-top: 30px;
  background: red;
  border: none;
`;

export default function Landing() {
  return (
    <div>
      <LandingWrapper>
        <Header></Header>
        <StyledBody>
          <StyledTitle>Introducing OnTab</StyledTitle>
          <StyledSubTitle>
            Revolutionize the way we spend our nights at the bar
          </StyledSubTitle>

          <StyledVideo src='https://www.youtube.com/embed/tgbNymZ7vqY'></StyledVideo>
          {/* <StyledInput></StyledInput> */}
        </StyledBody>
      </LandingWrapper>
      <FigmaWrapper>
        <FigmaTitle>Check out our interface!</FigmaTitle>
        <Figma
          src='https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2FoubLSKr2olY2CWZXFrFTkR%2FOnTabBartender%3Fnode-id%3D0%253A1'
          allowfullscreen
        ></Figma>
      </FigmaWrapper>
      <Footer></Footer>
    </div>
  );
}
