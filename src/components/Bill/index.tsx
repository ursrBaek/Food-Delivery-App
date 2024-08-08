import React, { useEffect } from 'react';
import OrderedItem from './OrderedItem';
import { StyledBill } from './styles';
import Header from 'components/common/Header';
import BottomMenu from 'components/common/BottomMenu';
import { useOrderInfo } from 'store';
import { useNavigate } from 'react-router-dom';

function Bill() {
  const { storeName, orderList, totalAmount, orderDate } = useOrderInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (!orderDate) {
      alert('잘못된 접근입니다.');
      navigate('/');
    }
  }, [orderDate, navigate]);

  return (
    <>
      <Header>주문 완료</Header>
      <StyledBill>
        <div className="order-info">
          <p className="order-completed-msg">주문이 완료되었어요!</p>
          <p className="store-name">{storeName}</p>
          <p className="order-date">주문일시: {orderDate}</p>
        </div>
        <h2 className="orders">주문 내역</h2>
        <ul>{orderList.map((menu, idx) => menu && <OrderedItem key={idx} menu={menu} />)}</ul>
        <div className="totalOrderedPrice">
          <span className="priceTitle">총 결제금액</span>
          <span>{totalAmount.toLocaleString()} 원</span>
        </div>
      </StyledBill>
      <BottomMenu />
    </>
  );
}

export default Bill;
