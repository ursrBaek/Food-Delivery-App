import React from 'react';
import { StyledTotalOrderAmount } from './styles';
import { useOrderInfo } from 'store';

function TotalOrderAmount() {
  const { deliveryTip, totalAmount } = useOrderInfo();

  return (
    <StyledTotalOrderAmount>
      <p className="priceHeader">결제금액</p>
      <p>
        <span>주문금액</span>
        <span>{(totalAmount - deliveryTip).toLocaleString()}원</span>
      </p>
      <p>
        <span>배달팁</span>
        <span>{deliveryTip.toLocaleString()}원</span>
      </p>

      <p className="totalAmount">
        <span>총 결제금액</span>
        <span className="order-price">{totalAmount.toLocaleString()} 원</span>
      </p>
    </StyledTotalOrderAmount>
  );
}

export default TotalOrderAmount;
