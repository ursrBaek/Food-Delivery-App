import React from 'react';
import OrderHistoryItem from './OrderHistoryItem';
import { useUserId } from 'store';
import useUserOrderListQuery from './hooks/useUserOrderListQuery';
import { Message } from 'components/common/styles';

export default function OrderHistoryList() {
  const userId = useUserId();
  const { isLoading, isError, data: orderHistoryList, error } = useUserOrderListQuery(userId);
  if (isLoading) {
    return <Message>로딩중...</Message>;
  }

  if (isError) {
    return (
      <Message $error="true">
        'Error가 발생했습니다.'
        <br />
        {error && error.message}
      </Message>
    );
  }

  if (orderHistoryList?.length) {
    return (
      <ul>
        {orderHistoryList.map((orderInfo) => (
          <OrderHistoryItem key={orderInfo.orderDate} orderInfo={orderInfo} />
        ))}
      </ul>
    );
  }

  return <Message>주문한 내역이 없습니다.</Message>;
}
