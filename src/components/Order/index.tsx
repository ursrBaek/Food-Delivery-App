import Header from 'components/common/Header';
import React from 'react';
import { GrayWrapper } from './styles';
import OrderInfo from './OrderInfo';

export default function Order() {
  return (
    <>
      <Header>주문하기</Header>
      <GrayWrapper>
        <OrderInfo />
      </GrayWrapper>
    </>
  );
}
