import React from 'react';
import { Link } from 'react-router-dom';

function StoreItem() {
  return (
    <li>
      <Link to={`/store/detail/1`}>
        <img src={require(`../../assets/images/stores/명랑핫도그.jpg`)} alt="명랑핫도그 로고 이미지" />
        <div className="store-description">
          <p className="store-name">명랑핫도그</p>
          <p>
            <i className="fas fa-star"></i>
            {'storeStar'} ({'reviewCount'})
          </p>
          <p>
            <i className="far fa-clock"></i>
            {'50'}분 / 최소주문 {'15,000'}원
          </p>
          <p>배달팁 {'3,000'}원</p>
        </div>
      </Link>
    </li>
  );
}

export default StoreItem;
