import React from 'react';
import { StyledListItem } from './styles';
import { IOrderItem, IUserOrderListItemRes } from 'types/responseTypes';
import getCurrentDate from 'utils/getCurrentDate';
import { useOrderListAction } from 'store';
import { useNavigate } from 'react-router-dom';
import { getOrderListAndCount } from 'utils/common';

interface Props {
  orderInfo: IUserOrderListItemRes<Array<IOrderItem | null>>;
}

export default function OrderHistoryItem({ orderInfo }: Props) {
  const navigate = useNavigate();
  const { setOrderSameMenu } = useOrderListAction();

  const { firstMenu, menuCount } = getOrderListAndCount(orderInfo.orderList);

  const clickOrderDetailView = () => {
    navigate(`/orderDetail/${orderInfo.key}`);
  };

  const clickAddSameMenu = () => {
    setOrderSameMenu(orderInfo);
    navigate(`/order/${orderInfo.storeId}`);
  };

  const clickMoveToReviewWrite = () => {
    setOrderSameMenu(orderInfo);
    navigate(`/review/${orderInfo.key}`);
  };

  return (
    <StyledListItem>
      <div className="dateAndDetailBtn">
        <span className="orderDate">{getCurrentDate(orderInfo.orderDate)}</span>
        <button className="viewDetailBtn" onClick={clickOrderDetailView}>
          주문상세
        </button>
      </div>
      <div className="orderInfo">
        <img src={require(`../../assets/images/stores/${orderInfo.storeImg}`)} alt={`${orderInfo.storeName} 이미지`} />
        <div>
          <p className="storeName">{orderInfo.storeName}</p>
          <p className="orderMenu">
            {firstMenu} {menuCount > 1 ? `외 ${menuCount - 1}` : ''}
          </p>
          <p className="orderPrice">총 결제금액: {orderInfo.totalAmount.toLocaleString()}원</p>
        </div>
      </div>
      <button className="AddToOrderBtn" onClick={clickAddSameMenu}>
        같은 메뉴 담기
      </button>
      <button className={`reviewBtn ${orderInfo.review ? 'disabled' : ''}`} disabled={orderInfo.review} onClick={clickMoveToReviewWrite}>
        리뷰 쓰기 {orderInfo.review && '( 작성완료 )'}
      </button>
    </StyledListItem>
  );
}
