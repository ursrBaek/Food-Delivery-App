import React from 'react';
import OrderMenuItem from './OrderMenuItem';
import { IOrderItem, IUserOrderListItemRes } from 'types/responseTypes';

interface Props {
  orderDetailInfo: IUserOrderListItemRes<(IOrderItem | null)[]>;
}

function OrderMenuDetail({ orderDetailInfo }: Props) {
  return (
    <div>
      <h2>주문내역</h2>
      {<ul>{orderDetailInfo.orderList.map((menu) => menu && <OrderMenuItem menu={menu} key={menu?.foodName} />)}</ul>}
    </div>
  );
}

export default OrderMenuDetail;
