import React from 'react';
import { StyledTotalOrderAmount } from './styles';

function TotalOrderAmount() {
  return (
    <StyledTotalOrderAmount>
      <span>총 주문금액</span>
      <span className="order-price">133,000 원</span>
    </StyledTotalOrderAmount>
  );
}

export default TotalOrderAmount;
