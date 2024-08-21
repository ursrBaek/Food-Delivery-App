import React from 'react';
import { StyledPrevButton } from './styles';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
      <FontAwesomeIcon icon={faArrowLeft} />
    </StyledPrevButton>
  );
}

export default PrevButton;
