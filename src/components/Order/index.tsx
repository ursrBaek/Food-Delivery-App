import Header from 'components/common/Header';
import React from 'react';
import { GrayWrapper } from '../common/styles';
import OrderInfo from './OrderInfo';
import PrevButton from 'components/common/PrevButton';

export default function Order() {
  return (
    <>
      <Header>주문하기</Header>
      <PrevButton isAbsolutePosition={true} />
      <GrayWrapper>
        <OrderInfo />
      </GrayWrapper>
    </>
  );
}
