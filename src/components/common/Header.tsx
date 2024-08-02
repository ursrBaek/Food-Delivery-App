import React from 'react';
import { StyledHeader } from './styles';

interface Props {
  children: string;
}

function Header({ children }: Props) {
  return (
    <StyledHeader>
      <h1>{children}</h1>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledHeader>
  );
}

export default Header;
