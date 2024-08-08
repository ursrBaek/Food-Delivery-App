import React from 'react';
import Empty from './Empty';
import OrderItem from './OrderItem';
import OrderButton from './OrderButton';
import OrderStoreInfo from './OrderStoreInfo';
import FoodMessage from './FoodMessage';
import TotalOrderAmount from './TotalOrderAmount';
import { useOrderInfo } from 'store';

function OrderInfo() {
  const { storeName, storeId, orderList, totalAmount } = useOrderInfo();

  if (!orderList || orderList.length === 0) return <Empty />;
  return (
    <>
      <OrderStoreInfo storeName={storeName} />
      <ul>{orderList.map((menu, idx) => menu && <OrderItem menuInfo={menu} key={menu?.foodName} idx={idx} />)}</ul>
      <TotalOrderAmount totalAmount={totalAmount} />
      <FoodMessage />
      <OrderButton totalAmount={totalAmount} />
    </>
  );
}

export default OrderInfo;
