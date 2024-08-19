import React from 'react';
import { Link } from 'react-router-dom';
import { useRecentStores, useRecentStoresActions, useUserId } from 'store';
import { StoreInfo } from 'types/responseTypes';
import { categoryName } from 'utils/common';

interface Props {
  storeInfo: StoreInfo;
  isDelBtn?: boolean;
}

export default function StoreListItem({ storeInfo, isDelBtn }: Props) {
  const { setRecentStore } = useRecentStoresActions();
  const recentStores = useRecentStores();
  const userId = useUserId();

  const clickDeleteBtn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!isDelBtn) return;

    e.preventDefault();

    const STORAGE_KEY = 'recentStores-' + (userId || '');
    const newRecentStore = [...recentStores];
    const findIdx = newRecentStore.findIndex((store) => store.id === storeInfo.id);
    newRecentStore.splice(findIdx, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecentStore));
    setRecentStore(newRecentStore);
  };

  return (
    <li>
      <Link to={`/store/detail/${storeInfo.id}`}>
        <img src={require(`../../assets/images/stores/${storeInfo.storeImg}`)} alt={storeInfo.storeName + ' 이미지'} />
        <div className="info">
          <p className="storeName">{storeInfo.storeName}</p>
          <p className="category">{categoryName[storeInfo.category]}</p>
        </div>
        {isDelBtn && <i className="fa-solid fa-xmark" onClick={clickDeleteBtn}></i>}
      </Link>
    </li>
  );
}
