import React from 'react';
import storeImage from '../../assets/images/stores/엽기떡볶이로고.jpg';
import { StyledListItem } from './styles';

export default function OrderHistoryItem() {
  return (
    <StyledListItem>
      <div className="dateAndDetailBtn">
        <span className="orderDate">2. 10(토)</span>
        <button className="viewDetailBtn">주문상세</button>
      </div>
      <div className="orderInfo">
        <img src={storeImage} alt="가게 이미지" />
        <div>
          <p className="storeName">엽기떡볶이 으능정이거리점</p>
          <p className="orderMenu">마라떡볶이 외 1개 22,360원</p>
        </div>
      </div>
      <button className="AddToOrderBtn">같은 메뉴 담기</button>
      <button className="reviewBtn">
        리뷰 쓰기 <span>(1일 남음)</span>
      </button>
    </StyledListItem>
  );
}
