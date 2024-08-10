import React from 'react';
import Empty from './Empty';
import OrderItem from './OrderItem';
import OrderButton from './OrderButton';
import OrderStoreInfo from './OrderStoreInfo';
import FoodMessage from './FoodMessage';
import TotalOrderAmount from './TotalOrderAmount';
import { useOrderInfo } from 'store';
import { IOrderItem } from 'types/responseTypes';

function OrderInfo() {
  const { storeName, orderList, totalAmount, deliveryTip } = useOrderInfo();

  if (!orderList || !(totalAmount - deliveryTip)) return <Empty />;

  const renderOrderList = () => {
    const list = [];
    for (const key in orderList) {
      if (orderList[key]) {
        const menu = orderList[key] as IOrderItem;
        list.push(<OrderItem menuInfo={menu} key={menu?.foodName} idx={+key} />);
      }
    }

    return list;
  };

  return (
    <>
      <OrderStoreInfo storeName={storeName} />
      <ul>
        {/* {orderList.map((menu, idx) => {
          if (menu) {
            return <OrderItem menuInfo={menu} key={menu?.foodName} idx={idx} />;
          }
          return null;
        })} */}
        {renderOrderList()}
      </ul>
      <TotalOrderAmount />
      <FoodMessage />
      <OrderButton />
    </>
  );
}

export default OrderInfo;
