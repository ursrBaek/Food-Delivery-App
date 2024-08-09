import React from 'react';
import OrderHistoryItem from './OrderHistoryItem';
import { useUserId } from 'store';
import useUserOrderListQuery from './hooks/useUserOrderListQuery';
import { Message } from 'components/common/styles';

export default function OrderHistoryList() {
  const userId = useUserId();
  const { isLoading, isError, data: orderHistoryList, error } = useUserOrderListQuery(userId);

  return (
    <ul>
      {isLoading && <Message>로딩중...</Message>}
      {isError && (
        <Message $error="true">
          'Error가 발생했습니다.'
          <br />
          {error && error.message}
        </Message>
      )}
      {orderHistoryList?.length &&
        orderHistoryList.map((orderInfo) => <OrderHistoryItem key={orderInfo.orderDate} orderInfo={orderInfo} />)}
    </ul>
  );
}
