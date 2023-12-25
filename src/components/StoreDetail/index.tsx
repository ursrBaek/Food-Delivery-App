import Header from 'components/common/Header';
import React from 'react';
import StoreInfo from './StoreInfo';
import StoreOrderInfo from './StoreOrderInfo';
import { MainBox } from './styles';
import StoreDetailMain from './StoreDetailMain';

export default function StoreDetail() {
  return (
    <>
      <Header>경성꽈배기</Header>
      <MainBox>
        <StoreInfo />
        <StoreOrderInfo />
        <StoreDetailMain />
      </MainBox>
    </>
  );
}
