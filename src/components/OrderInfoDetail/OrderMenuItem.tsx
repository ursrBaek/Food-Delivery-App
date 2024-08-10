import React from 'react';
import { IOrderItem } from 'types/responseTypes';
interface Props {
  menu: IOrderItem;
}

export default function OrderMenuItem({ menu }: Props) {
  return (
    <li className="order-list">
      <div className="menu-name">* {menu.foodName}</div>
      <div>{menu.orderCount}개</div>
      <div>{menu.foodPrice}원</div>
    </li>
  );
}
