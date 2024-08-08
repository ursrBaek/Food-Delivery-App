import React, { useEffect } from 'react';
import { StyledStoreOrderInfoBox } from './styles';
import { StoreDetailInfo } from 'types/responseTypes';
import { useOrderListAction } from 'store';

interface Props {
  storeDetailInfo: StoreDetailInfo;
}

function StoreOrderInfo({ storeDetailInfo }: Props) {
  const { setStoreId, setStoreName } = useOrderListAction();

  useEffect(() => {
    const { id, storeName } = storeDetailInfo;
    setStoreId(id.toString());
    setStoreName(storeName);
  }, [setStoreId, setStoreName, storeDetailInfo]);

  return (
    <StyledStoreOrderInfoBox>
      <p>
        <span>최소 주문금액</span>
        {storeDetailInfo.minPrice.toLocaleString()} 원
      </p>
      <p>
        <span>배달시간</span>
        {storeDetailInfo.deliveryTime}분
      </p>
      <p>
        <span>배달팁</span>
        {storeDetailInfo.deliveryTip.toLocaleString()}원
      </p>
    </StyledStoreOrderInfoBox>
  );
}

export default StoreOrderInfo;
