import React from 'react';
import { StyledStoreOrderInfoBox } from './styles';

function StoreOrderInfo() {
  return (
    <StyledStoreOrderInfoBox>
      <p>
        <span>최소 주문금액</span>
        15,000 원
      </p>
      <p>
        <span>배달시간</span>
        35분
      </p>
      <p>
        <span>배달팁</span>
        3,000원
      </p>
    </StyledStoreOrderInfoBox>
  );
}

export default StoreOrderInfo;
