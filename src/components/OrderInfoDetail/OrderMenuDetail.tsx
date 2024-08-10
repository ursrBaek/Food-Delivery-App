import React from 'react';
import OrderMenuItem from './OrderMenuItem';
import { IUserOrderListItemRes } from 'types/responseTypes';
import { getOrderListAndCount } from 'utils/common';

interface Props {
  orderDetailInfo: IUserOrderListItemRes;
}

function OrderMenuDetail({ orderDetailInfo }: Props) {
  const { menuList } = getOrderListAndCount(orderDetailInfo.orderList);
  return (
    <div>
      <h2>주문내역</h2>
      {menuList.length && <ul>{menuList.map((menu) => menu && <OrderMenuItem menu={menu} key={menu?.foodName} />)}</ul>}
    </div>
  );
}

export default OrderMenuDetail;
