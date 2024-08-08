import React from 'react';
import { IOrderItem } from 'types/responseTypes';

interface Props {
  key: number;
  menu: IOrderItem;
}

function OrderedItem({ menu }: Props) {
  return (
    <li className="order-list">
      <div className="menu-name">
        {menu.foodName} <span>({menu.foodPrice.toLocaleString()}원)</span>
      </div>
      <div>{menu.orderCount} 개</div>
      <div>{(menu.foodPrice * menu.orderCount).toLocaleString()} 원</div>
    </li>
  );
}

export default OrderedItem;
