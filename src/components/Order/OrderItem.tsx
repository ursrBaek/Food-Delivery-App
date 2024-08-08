import React from 'react';
import { StyledOrderListItem } from './styles';
import { IOrderItem } from 'types/responseTypes';

interface Props {
  menuInfo: IOrderItem;
  idx: number;
}

function OrderItem({ menuInfo, idx }: Props) {
  return (
    <StyledOrderListItem>
      <img src={require(`../../assets/images/menuImages/${menuInfo.foodImage}`)} alt={menuInfo.foodImage} />
      <div className="menu-info">
        <p>{menuInfo.foodName}</p>
        <p className="menu-price">{menuInfo.foodPrice.toLocaleString()}원</p>
        <div className="counter">
          <span className="minus-btn">-</span>
          <span className="count">{menuInfo.orderCount}</span>
          <span className="plus-btn">+</span>
        </div>
      </div>
      <div className="delete-btn"></div>
    </StyledOrderListItem>
  );
}

export default OrderItem;
