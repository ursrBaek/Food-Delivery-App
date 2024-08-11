import React from 'react';
import { Link } from 'react-router-dom';
import { StoreInfo } from 'types/responseTypes';
import { categoryName } from 'utils/common';

interface Props {
  storeInfo: StoreInfo;
}

export default function StoreListItem({ storeInfo }: Props) {
  return (
    <li>
      <Link to={`/store/detail/${storeInfo.id}`}>
        <img src={require(`../../assets/images/stores/${storeInfo.storeImg}`)} alt={storeInfo.storeName + ' 이미지'} />
        <div className="info">
          <p className="storeName">{storeInfo.storeName}</p>
          <p className="category">{categoryName[storeInfo.category]}</p>
        </div>
      </Link>
    </li>
  );
}
