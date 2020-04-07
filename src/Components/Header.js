import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrap = styled.div`
  margin: 0 15rem 0 15rem;
  color: var(--dark-color);
`;

const StyledNav = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 70px;
  font-size: 1.2rem;
  font-weight: 550;
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1.2rem;
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
  border-top: 1px solid #343a40;
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
          <NavLinks to='/Survey'>FAQ</NavLinks>
          <NavLinks to='/'>Contact</NavLinks>
        </LinksWrap>
      </StyledNav>
      <StyledLine></StyledLine>
    </NavWrap>
  );
}
