import React from 'react';
import { StyledHeader } from './styles';

interface Props {
  children: string;
  isAboveScrollPoint?: boolean;
}

function Header({ children, isAboveScrollPoint }: Props) {
  return (
    <StyledHeader>
      <h1 className={isAboveScrollPoint ? 'hide' : ''}>{children}</h1>
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
