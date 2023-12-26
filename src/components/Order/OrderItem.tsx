import React from 'react';
import { StyledOrderListItem } from './styles';

function OrderItem() {
  return (
    <StyledOrderListItem>
      <img
        src={require(`../../assets/images/menuImages/하남돼지집-한돈삼겹살.jpg`)}
        alt="통모짜핫도그"
      />
      <div className="menu-info">
        <p>통모짜감자핫도그</p>
        <p className="menu-price">14,500원</p>
        <div className="counter">
          <span className="minus-btn">-</span>
          <span className="count">5</span>
          <span className="plus-btn">+</span>
        </div>
      </div>
      <div className="delete-btn"></div>
    </StyledOrderListItem>
  );
}

export default OrderItem;
