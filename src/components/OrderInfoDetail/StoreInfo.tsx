import React from 'react';
import { Link } from 'react-router-dom';
import { IUserOrderListItemRes } from 'types/responseTypes';
import { getOrderListAndCount } from 'utils/common';
import getCurrentDate from 'utils/getCurrentDate';

interface Props {
  orderDetailInfo: IUserOrderListItemRes;
  orderId: string;
}

export default function StoreInfo({ orderDetailInfo, orderId }: Props) {
  const { menuList, menuCount } = getOrderListAndCount(orderDetailInfo.orderList);
  return (
    <div className="storeInfo">
      <p className="order-completed-msg">배달이 완료되었어요</p>
      <p className="store-name">{orderDetailInfo.storeName}</p>
      <p className="order-sum">
        {menuList[0] ? `${menuList[0].foodName}` : ''} {menuCount > 1 ? `외 ${menuCount - 1}개` : ''}
      </p>
      <p className="order-date">주문일시: {getCurrentDate(orderDetailInfo.orderDate)}</p>
      <p className="order-id">주문번호: {orderId}</p>
      <Link to={`/store/detail/${orderDetailInfo.storeId}`}>
        <i className="fa-solid fa-store"></i> 가게보기
      </Link>
    </div>
  );
}
