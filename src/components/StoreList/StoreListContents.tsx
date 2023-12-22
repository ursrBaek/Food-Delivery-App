import React from 'react';
import { StyledContainer } from './styles';
import StoreItem from './StoreItem';

function StoreListContents() {
  return (
    <StyledContainer>
      {Array(2)
        .fill(1)
        .map((v, i) => (
          <StoreItem />
        ))}
    </StyledContainer>
  );
}

export default StoreListContents;
