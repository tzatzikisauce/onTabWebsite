import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrap = styled.div`
  margin: 0 30px 0 30px;
`;

const StyledNav = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 70px;
  font-weight: 450;
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LinksWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavLogo = styled(Link)`
  display: flex;
  align-self: center;
`;

const NavLinks = styled(Link)`
  margin: auto 0px auto 30px;
  display: flex;
  align-self: center;
`;

const StyledLine = styled.hr`
  height: 10px;
  border: 0;
  border-top: 1px solid #f4f4f4;
`;

export default function Header() {
  return (
    <NavWrap>
      <StyledNav>
        <LogoWrap>
          <NavLogo to='/'>OnTab</NavLogo>
        </LogoWrap>
        <LinksWrap>
          <NavLinks to='/'>Community</NavLinks>
          <NavLinks to='/'>FAQ</NavLinks>
          <NavLinks to='/'>Contact</NavLinks>
          <NavLinks to='/'>Get Early Access</NavLinks>
        </LinksWrap>
      </StyledNav>
      <StyledLine></StyledLine>
    </NavWrap>
  );
}
