import React from 'react';
import { StyledOrderStoreInfoBox } from './styles';

interface Props {
  storeName: string;
}

function OrderStoreInfo({ storeName }: Props) {
  return (
    <StyledOrderStoreInfoBox>
      <div className="store-name">{storeName}</div>
      <div className="delivery-msg">
        <p>배달</p>
        <p>문 앞까지 음식이 배달됩니다.</p>
      </div>
    </StyledOrderStoreInfoBox>
  );
}

export default OrderStoreInfo;
