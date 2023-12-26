import React from 'react';
import { EmptyContainer } from './styles';

function Empty() {
  return (
    <EmptyContainer>
      <div className="emptyImg"></div>
      <p>선택된 메뉴가 없습니다.</p>
    </EmptyContainer>
  );
}

export default Empty;
