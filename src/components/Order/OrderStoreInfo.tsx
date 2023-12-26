import React from 'react';
import { StyledOrderStoreInfoBox } from './styles';

function OrderStoreInfo() {
  return (
    <StyledOrderStoreInfoBox>
      <div className="store-name">경성꽈배기 성수카페거리점</div>
      <div className="delivery-msg">
        <p>배달</p>
        <p>문 앞까지 음식이 배달됩니다.</p>
      </div>
    </StyledOrderStoreInfoBox>
  );
}

export default OrderStoreInfo;
