import React from 'react';
import { StyledPrevButton } from './styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  isAbsolutePosition?: boolean;
  whiteBg?: boolean;
}

function PrevButton({ isAbsolutePosition, whiteBg }: Props) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledPrevButton className={`${isAbsolutePosition ? 'absolutePosition' : ''} ${whiteBg ? 'whiteBg' : ''}`} onClick={handleGoBack}>
      <i className="fas fa-arrow-left"></i>
    </StyledPrevButton>
  );
}

export default PrevButton;
