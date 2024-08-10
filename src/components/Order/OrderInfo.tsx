import React from 'react';
import Empty from './Empty';
import OrderItem from './OrderItem';
import OrderButton from './OrderButton';
import OrderStoreInfo from './OrderStoreInfo';
import FoodMessage from './FoodMessage';
import TotalOrderAmount from './TotalOrderAmount';
import { useOrderInfo } from 'store';

function OrderInfo() {
  const { storeName, orderList, totalAmount, deliveryTip } = useOrderInfo();

  if (!orderList?.length || !(totalAmount - deliveryTip)) return <Empty />;

  return (
    <>
      <OrderStoreInfo storeName={storeName} />
      <ul>
        {orderList.map((menu, idx) => {
          if (menu) {
            return <OrderItem menuInfo={menu} key={menu.foodName} idx={idx} />;
          }
          return null;
        })}
      </ul>
      <TotalOrderAmount />
      <FoodMessage />
      <OrderButton />
    </>
  );
}

export default OrderInfo;
