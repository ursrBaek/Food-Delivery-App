import React from 'react';
import { useRecentStores, useRecentStoresLoading } from 'store';
import StoreListItem from './StoreListItem';

export default function RecentStores() {
  const recentStores = useRecentStores();
  const isLoading = useRecentStoresLoading();

  return (
    <div>
      <h2>최근 본 가게</h2>
      {isLoading ? (
        <p className="infoMsg">불러오는 중...</p>
      ) : recentStores.length ? (
        <ul>
          {recentStores.map((storeInfo) => (
            <StoreListItem storeInfo={storeInfo} isDelBtn={true} key={storeInfo.id} />
          ))}
        </ul>
      ) : (
        <p className="infoMsg">최근 조회한 가게가 없습니다.</p>
      )}
    </div>
  );
}
