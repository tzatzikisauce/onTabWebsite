import React from 'react';
import styled from 'styled-components';

const FootWrap = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  height: 20vh;
  display: flex;
`;

export default function Footer() {
  return (
    <div>
      <FootWrap>
        <ion-icon name='logo-linkedin'></ion-icon>

        <ion-icon name='logo-github'></ion-icon>
        <ion-icon name='logo-instagram'></ion-icon>
        <ion-icon name='logo-twitter'></ion-icon>
      </FootWrap>
    </div>
  );
}
