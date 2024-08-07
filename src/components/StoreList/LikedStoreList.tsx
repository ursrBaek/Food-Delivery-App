import React from 'react';
import { useStoreListOfLikeQuery } from './hooks/storeListQuery';
import { useUserId } from 'store';
import StoreListDisplay from './StoreListDisplay';

function LikedStoreList() {
  const userId = useUserId();
  const { isLoading, data: storeLists, isError, error } = useStoreListOfLikeQuery(userId);

  return <StoreListDisplay isLoading={isLoading} isError={isError} storeLists={storeLists} error={error} />;
}

export default LikedStoreList;
