import Header from 'components/common/Header';
import PrevButton from 'components/common/PrevButton';
import React from 'react';
import { OrderInfoBox } from './styles';
import OrderMenuDetail from './OrderMenuDetail';
import StoreInfo from './StoreInfo';
import TotalAmount from './TotalAmount';

export default function OrderInfoDetail() {
  return (
    <>
      <Header>주문내역</Header>
      <PrevButton isAbsolutePosition={true} />
      <OrderInfoBox>
        <StoreInfo />
        <OrderMenuDetail />
        <TotalAmount />
      </OrderInfoBox>
    </>
  );
}
