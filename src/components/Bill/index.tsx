import React from 'react';
import OrderedItem from './OrderedItem';
import { StyledBill } from './styles';
import Header from 'components/common/Header';
import BottomMenu from 'components/common/BottomMenu';

function Bill() {
  return (
    <>
      <Header>주문 완료</Header>
      <StyledBill>
        <div className="order-info">
          <p className="order-completed-msg">주문이 완료되었어요!</p>
          <p className="store-name">경성꽈배기 성수카페거리점</p>
          <p className="order-sum">통모짜감자핫도그 외 1</p>
          <p className="order-date">주문일시: 2023년 12월 27일 18:32:28</p>
        </div>
        <h2 className="orders">주문 내역</h2>
        <ul>
          <OrderedItem />
          <OrderedItem />
          <OrderedItem />
          <OrderedItem />
          <OrderedItem />
        </ul>
        <div className="totalOrderedPrice">
          <span className="priceTitle">총 결제금액</span>
          <span>1,234,800 원</span>
        </div>
      </StyledBill>
      <BottomMenu />
    </>
  );
}

export default Bill;
