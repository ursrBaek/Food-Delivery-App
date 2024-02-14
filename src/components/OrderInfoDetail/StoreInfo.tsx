import React from 'react';
import { Link } from 'react-router-dom';

export default function StoreInfo() {
  return (
    <div className="storeInfo">
      <p className="order-completed-msg">배달이 완료되었어요</p>
      <p className="store-name">순살만공격 광주송정점</p>
      <p className="order-sum">순살치킨양념반후라이드반 외 1개</p>
      <p className="order-date">주문일시: 2024년 02월 05일 오후 04:53</p>
      <p className="order-id">주문번호: 002</p>
      <Link to={'/store/detail/1'}>
        <i className="fa-solid fa-store"></i> 가게보기
      </Link>
    </div>
  );
}
