import React from 'react';
import OrderMenuItem from './OrderMenuItem';

function OrderMenuDetail() {
  return (
    <div>
      <h2>주문내역</h2>
      <ul>
        <OrderMenuItem />
        <OrderMenuItem />
        <OrderMenuItem />
      </ul>
    </div>
  );
}

export default OrderMenuDetail;
