import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Button } from '../Components/Button';
import mainBcg from '../Images/assorted-wine-bottles-1283219.jpg';
import screen1 from './../Images/OnTabPitch1.png';
import screen2 from './../Images/OnTabPitch2.png';
import screen3 from './../Images/OnTabPitch3.png';

const LandingWrapper = styled.div`
  background: linear-gradient(
      to right,
      rgb(198, 255, 221, 0.9),
      rgb(251, 215, 134, 0.9),
      rgb(247, 121, 125, 0.9)
    ),
    url(${mainBcg}) no-repeat fixed;
  background-size: cover;
  color: var(--dark-color);
  height: 95vh;
`;

const StyledBody = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: -5rem 15rem 0 15rem;
`;

const StyledTitle = styled.div`
  font-size: 4.5rem;
  letter-spacing: 2px;
`;

const StyledSubTitle = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
`;

const ButtonWrapper = styled.a`
  margin-top: 10rem;
`;

const ContactButton = styled(Button)``;

const ScreenBlockWrapper = styled.div`
  margin: 5rem 0rem 5rem 0rem;
`;

const BlockWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StyledScreen = styled.img`
  width: 100%;
`;

const StyledTextWrapper = styled.div`
  display: grid;
  background-color: ${(props) => props.color};
  margin: 0rem 5rem 0rem 5rem;
`;

const StyledBlockTitle = styled.div`
  align-self: center;
  justify-self: center;
  font-size: 4.5rem;
  letter-spacing: 2px;
`;

const StyledBlockText = styled.div`
  justify-self: center;
  font-size: 1.5rem;
`;

const SurveyBlockWrapper = styled.div`
  display: grid;
  height: 50vh;
  background-color: var(--light-green);
`;
const SurveyText = styled.div`
  justify-self: center;
  align-self: center;
  display: grid;
`;

const SurveyTitle = styled.div`
  font-size: 4.5rem;
  letter-spacing: 2px;
`;
const SurveySubTitle = styled.div`
  font-size: 1.5rem;
  justify-self: center;
`;
const StyledLink = styled(Link)`
  margin-top: 1rem;
  justify-self: center;
  align-self: center;
`;
const SurveyButton = styled(Button)``;

export default function Landing() {
  return (
    <div>
      <LandingWrapper>
        <Header></Header>
        <StyledBody>
          <StyledTitle>Let's Modernize the Bar Industry</StyledTitle>
          <StyledSubTitle>
            OnTab is an application that makes ordering at bars easier for
            everyone. Ordering a drink is as simple as swiping card.
          </StyledSubTitle>
          <ButtonWrapper>
            <a href='mailto:somone@example.com'>
              <ContactButton>Contact us</ContactButton>
            </a>
          </ButtonWrapper>
        </StyledBody>
      </LandingWrapper>
      <ScreenBlockWrapper>
        <BlockWrapper>
          <StyledScreen src={screen1}></StyledScreen>
          <StyledTextWrapper>
            <StyledBlockTitle>Everything in one place</StyledBlockTitle>
            <StyledBlockText>
              Bartenders spend too much time waiting on old systems. We've
              simplified the checkout process.
            </StyledBlockText>
          </StyledTextWrapper>
        </BlockWrapper>
        <BlockWrapper>
          <StyledTextWrapper>
            <StyledBlockTitle>Take control</StyledBlockTitle>
            <StyledBlockText>
              An intuitive interface to keep track of everyones open tabs.
            </StyledBlockText>
          </StyledTextWrapper>
          <StyledScreen src={screen2}></StyledScreen>
        </BlockWrapper>
        <BlockWrapper>
          <StyledScreen src={screen3}></StyledScreen>
          <StyledTextWrapper>
            <StyledBlockTitle>Never been easier</StyledBlockTitle>
            <StyledBlockText>
              Bartenders can now easily keep track of open tabs.
            </StyledBlockText>
          </StyledTextWrapper>
        </BlockWrapper>
      </ScreenBlockWrapper>
      <SurveyBlockWrapper>
        <SurveyText>
          <SurveyTitle>Help us improve our application</SurveyTitle>
          <SurveySubTitle>Take our brief survey</SurveySubTitle>
          <StyledLink to='/Survey#top'>
            <SurveyButton
              color={'var(--primary-color)'}
              fontColor={'var(--light-green)'}
              hoverBack={'var(--primary-color)'}
              hoverColor={'var(--light-green)'}
            >
              Survey
            </SurveyButton>
          </StyledLink>
        </SurveyText>
      </SurveyBlockWrapper>
      <Footer></Footer>
    </div>
  );
}
