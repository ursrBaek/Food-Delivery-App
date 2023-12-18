import React from 'react';
import { StyledHeader } from './styles';

interface Props {
  children: string;
}

function Header({ children }: Props) {
  return (
    <StyledHeader>
      <h1>{children}</h1>
    </StyledHeader>
  );
}

export default Header;
