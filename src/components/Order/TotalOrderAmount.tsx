import React from 'react';
import { StyledTotalOrderAmount } from './styles';

interface Props {
  totalAmount: number;
}

function TotalOrderAmount({ totalAmount }: Props) {
  return (
    <StyledTotalOrderAmount>
      <span>총 주문금액</span>
      <span className="order-price">{totalAmount.toLocaleString()} 원</span>
    </StyledTotalOrderAmount>
  );
}

export default TotalOrderAmount;
