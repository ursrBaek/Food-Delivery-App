import Header from 'components/common/Header';
import PrevButton from 'components/common/PrevButton';
import React from 'react';
import { OrderInfoBox } from './styles';
import OrderMenuDetail from './OrderMenuDetail';
import StoreInfo from './StoreInfo';
import TotalAmount from './TotalAmount';
import { useParams } from 'react-router-dom';
import { useUserId } from 'store';
import useOrderDetailQuery from './hooks/useOrderDetailQuery';
import { Message } from 'components/common/styles';

export default function OrderInfoDetail() {
  const { orderId } = useParams();
  const userId = useUserId();

  if (!orderId) {
    throw new Error('매장 id 추출 중 오류발생.');
  }

  const { isLoading, data: orderDetailInfo, isError, error } = useOrderDetailQuery(userId, orderId);

  return (
    <>
      <Header>주문내역</Header>
      <PrevButton isAbsolutePosition={true} />
      <OrderInfoBox>
        {isLoading && <Message>로딩중...</Message>}
        {isError && (
          <Message $error="true">
            'Error가 발생했습니다.'
            <br />
            {error && error.message}
          </Message>
        )}
        {orderDetailInfo && (
          <>
            <StoreInfo orderDetailInfo={orderDetailInfo} orderId={orderId} />
            <OrderMenuDetail orderDetailInfo={orderDetailInfo} />
            <TotalAmount orderDetailInfo={orderDetailInfo} />
          </>
        )}
      </OrderInfoBox>
    </>
  );
}
