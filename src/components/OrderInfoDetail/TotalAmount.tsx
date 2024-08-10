import React from 'react';
import { IOrderItem, IUserOrderListItemRes } from 'types/responseTypes';

interface Props {
  orderDetailInfo: IUserOrderListItemRes<(IOrderItem | null)[]>;
}

export default function TotalAmount({ orderDetailInfo }: Props) {
  return (
    <div className="totalAmountContainer">
      <div className="bill">
        <h2>결제금액</h2>
        <div>
          <span>주문금액</span>
          <span>{(orderDetailInfo.totalAmount - orderDetailInfo.deliveryTip).toLocaleString()}원</span>
        </div>
        <div>
          <span>배달팁</span>
          <span>{orderDetailInfo.deliveryTip.toLocaleString()}원</span>
        </div>
      </div>
      <div className="totalOrderedPrice">
        <span className="priceTitle">총 결제금액</span>
        <span>{orderDetailInfo.totalAmount.toLocaleString()} 원</span>
      </div>
    </div>
  );
}
