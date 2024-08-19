import React from 'react';
import { StyledOrderListItem } from './styles';
import { IOrderItem } from 'types/responseTypes';
import { useOrderListAction } from 'store';

interface Props {
  menuInfo: IOrderItem;
  idx: number;
}

const MAX_COUNT = 10;
const MIN_COUNT = 1;

function OrderItem({ menuInfo, idx }: Props) {
  const { deleteMenu, increaseMenuCount, decreaseMenuCount } = useOrderListAction();

  const clickDelete = () => {
    deleteMenu(idx);
  };

  const clickPlus = () => {
    if (menuInfo.orderCount < MAX_COUNT) {
      increaseMenuCount(idx);
    }
  };

  const clickMinus = () => {
    if (menuInfo.orderCount > MIN_COUNT) {
      decreaseMenuCount(idx);
    }
  };

  return (
    <StyledOrderListItem>
      <img src={require(`../../assets/images/menuImages/${menuInfo.foodImage}`)} alt={menuInfo.foodImage} />
      <div className="menu-info">
        <p>{menuInfo.foodName}</p>
        <p className="menu-price">{menuInfo.foodPrice.toLocaleString()}원</p>
        <div className="counter">
          <span className="minus-btn" onClick={clickMinus}>
            -
          </span>
          <span className="count">{menuInfo.orderCount}</span>
          <span className="plus-btn" onClick={clickPlus}>
            +
          </span>
        </div>
      </div>
      <div className="delete-btn" onClick={clickDelete}></div>
    </StyledOrderListItem>
  );
}

export default React.memo(OrderItem);
