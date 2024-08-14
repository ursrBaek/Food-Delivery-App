import BottomMenu from 'components/common/BottomMenu';
import Header from 'components/common/Header';
import { GrayWrapper } from 'components/common/styles';
import React from 'react';
import OrderHistoryList from './OrderHistoryList';
import LoginCheckComp from 'components/common/LoginCheckComp';

export default function OrderHistory() {
  return (
    <>
      <Header>주문내역</Header>
      <LoginCheckComp>
        <GrayWrapper>
          <OrderHistoryList />
        </GrayWrapper>
      </LoginCheckComp>
      <BottomMenu />
    </>
  );
}
