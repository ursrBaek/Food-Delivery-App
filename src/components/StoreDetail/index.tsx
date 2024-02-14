import Header from 'components/common/Header';
import React from 'react';
import StoreInfo from './StoreInfo';
import StoreOrderInfo from './StoreOrderInfo';
import { MainBox } from './styles';
import StoreDetailMain from './StoreDetailMain';
import PrevButton from 'components/common/PrevButton';

export default function StoreDetail() {
  return (
    <>
      <Header>경성꽈배기</Header>
      <PrevButton isAbsolutePosition={true} />
      <MainBox>
        <StoreInfo />
        <StoreOrderInfo />
        <StoreDetailMain />
      </MainBox>
    </>
  );
}
