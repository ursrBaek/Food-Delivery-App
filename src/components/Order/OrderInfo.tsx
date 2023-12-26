import React from 'react';
import Empty from './Empty';
import OrderItem from './OrderItem';
import OrderButton from './OrderButton';
import OrderStoreInfo from './OrderStoreInfo';
import FoodMessage from './FoodMessage';
import TotalOrderAmount from './TotalOrderAmount';

function OrderInfo() {
  // return <Empty />;
  return (
    <>
      <OrderStoreInfo />
      <ul>
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ul>
      <TotalOrderAmount />
      <FoodMessage />
      <OrderButton />
    </>
  );
}

export default OrderInfo;
