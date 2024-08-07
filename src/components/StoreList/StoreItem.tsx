import React from 'react';
import { Link } from 'react-router-dom';
import { StoreInfo } from 'types/responseTypes';

interface Props {
  store: StoreInfo;
}

function StoreItem({ store }: Props) {
  return (
    <li>
      <Link to={`/store/detail/${store.id}`}>
        <img src={require(`../../assets/images/stores/${store.storeImg}`)} alt={`${store.storeName}`} />
        <div className="store-description">
          <p className="store-name">{store.storeName}</p>
          <p>
            <i className="fas fa-star"></i>
            {store.storeStar} ({store.reviewCount})
          </p>
          <p>
            <i className="far fa-clock"></i>
            {store.deliveryTime}분 / 최소주문 {store.minPrice.toLocaleString()}원
          </p>
          <p>배달팁 {store.deliveryTip.toLocaleString()}원</p>
        </div>
      </Link>
    </li>
  );
}

export default StoreItem;
