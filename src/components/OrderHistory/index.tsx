import BottomMenu from 'components/common/BottomMenu';
import Header from 'components/common/Header';
import { GrayWrapper } from 'components/common/styles';
import React from 'react';
import OrderHistoryList from './OrderHistoryList';

export default function OrderHistory() {
  return (
    <>
      <Header>주문내역</Header>
      <GrayWrapper>
        <OrderHistoryList />
      </GrayWrapper>
      <BottomMenu />
    </>
  );
}
