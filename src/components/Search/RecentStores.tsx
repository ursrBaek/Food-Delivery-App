import React from 'react';
import { useRecentStores, useRecentStoresLoading } from 'store';
import StoreListItem from './StoreListItem';

export default function RecentStores() {
  const recentStores = useRecentStores();
  const isLoading = useRecentStoresLoading();

  return (
    <div>
      <h2>최근 본 가게</h2>
      <ul>
        {isLoading ? (
          <p>불러오는 중...</p>
        ) : recentStores.length ? (
          recentStores.map((storeInfo) => <StoreListItem storeInfo={storeInfo} key={storeInfo.id} />)
        ) : (
          <p>최근 조회한 가게가 없습니다.</p>
        )}
      </ul>
    </div>
  );
}
