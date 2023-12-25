import React from 'react';

function MenuItem() {
  return (
    <label htmlFor="감자통모짜핫도그">
      <div className="menu-item">
        <input type="checkbox" readOnly />
        <div>
          <p className="menu-name">감자통모짜핫도그</p>
          <p className="menu-price">5,000원</p>
        </div>
        <img
          src={require(`../../assets/images/menuImages/명랑핫도그-감자통모짜핫도그.jpg`)}
          alt="감자통모짜핫도그"
        />
      </div>
    </label>
  );
}

export default MenuItem;
