import React from 'react';
import StoreListItem from './StoreListItem';
import { StoreIdListResponse, useAllStoresQuery } from './hooks/useAllStoresQuery';
import filterContainingTextStore from './filterContainingTextStore';

interface Props {
  searchText: string;
}

export default function SearchResults({ searchText }: Props) {
  const { isLoading, data: allStores, isError } = useAllStoresQuery();

  const filteredStoresArr = filterContainingTextStore(allStores as StoreIdListResponse, searchText);

  return (
    <>
      <h2>
        '<span>{searchText}</span>' 검색 결과
      </h2>
      {isError && <p className="error">Error: 검색 중 에러발생!</p>}
      {isLoading && <p className="infoMsg">검색중...</p>}
      {filteredStoresArr.length === 0 ? (
        <p className="infoMsg">일치하는 매장이 없습니다.</p>
      ) : (
        <ul>
          {filteredStoresArr.map((storeInfo) => (
            <StoreListItem key={storeInfo.id} storeInfo={storeInfo} />
          ))}
        </ul>
      )}
    </>
  );
}
