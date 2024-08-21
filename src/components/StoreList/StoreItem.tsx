import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <FontAwesomeIcon icon={faStar} />
            {store.storeStar} ({store.reviewCount})
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} />
            {store.deliveryTime}분 / 최소주문 {store.minPrice.toLocaleString()}원
          </p>
          <p>배달팁 {store.deliveryTip.toLocaleString()}원</p>
        </div>
      </Link>
    </li>
  );
}

export default StoreItem;
