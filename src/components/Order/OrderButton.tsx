import React from 'react';
import { StyledOrderButton } from './styles';

function OrderButton() {
  return (
    <StyledOrderButton>
      <span className="list-count">10</span>
      <span className="order-price">123,400원 </span> 배달 주문하기
    </StyledOrderButton>
  );
}

export default OrderButton;
