import React from 'react';

export default function TotalAmount() {
  return (
    <div className="totalAmountContainer">
      <div className="bill">
        <h2>결제금액</h2>
        <div>
          <span>주문금액</span>
          <span>45,000원</span>
        </div>
        <div>
          <span>배달팁</span>
          <span>3,000원</span>
        </div>
      </div>
      <div className="totalOrderedPrice">
        <span className="priceTitle">총 결제금액</span>
        <span>38,000 원</span>
      </div>
    </div>
  );
}
