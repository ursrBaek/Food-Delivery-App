import React from 'react';
import { StyledOrderButton } from './styles';

interface Props {
  totalAmount: number;
}

function OrderButton({ totalAmount }: Props) {
  return (
    <StyledOrderButton>
      <i className="fa-solid fa-utensils"></i> <span className="order-price">{totalAmount.toLocaleString()} 원 </span> 배달 주문하기
    </StyledOrderButton>
  );
}

export default OrderButton;
