import React from 'react';
import { StyledPrevButton } from './styles';

interface Props {
  isAbsolutePosition?: boolean;
}

function PrevButton({ isAbsolutePosition }: Props) {
  return (
    <StyledPrevButton className={isAbsolutePosition ? 'absolutePosition' : ''}>
      <i className="fas fa-arrow-left"></i>
    </StyledPrevButton>
  );
}

export default PrevButton;
