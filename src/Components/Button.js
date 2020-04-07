import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  border: none;

  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  border: 2px solid var(--primary-color);
  color: ${(props) => (props.fontColor ? props.fontColor : '#343a40')};
  overflow: hidden;
  padding: 0;
  font-size: 1.5rem;
  width: 15rem;
  height: 3.5rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${(props) =>
      props.hoverBack ? props.hoverBack : '#343a40'};

    color: ${(props) =>
      props.hoverColor ? props.hoverColor : 'rgb(251, 215, 134)'};

    cursor: pointer;
  }
`;
