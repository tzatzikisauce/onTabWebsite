import React from 'react';
import Header from '../Components/Header';
import styled from 'styled-components';

const SurveyWrapper = styled.div`
  background-color: var(--light-green);
`;

export default function Survery() {
  return (
    <div>
      <SurveyWrapper>
        <Header></Header>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSeXhHwESLqG2pb6iv8uG5OI57l-4Nmtx8hOiX9zSVK2BU0zAQ/viewform?embedded=true'
          height='2184'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
          margin='auto'
          width='100%'
        >
          Loading…
        </iframe>
      </SurveyWrapper>
    </div>
  );
}
