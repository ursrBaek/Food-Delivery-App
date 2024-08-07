import React from 'react';
import { useParams } from 'react-router-dom';
import { useStoreListOfCategoryQuery } from './hooks/storeListQuery';
import StoreListDisplay from './StoreListDisplay';

function CategoryStoreList() {
  const { category } = useParams();

  const { isLoading, data: storeLists, isError, error } = useStoreListOfCategoryQuery(category as string);

  return <StoreListDisplay isLoading={isLoading} isError={isError} storeLists={storeLists} error={error} />;
}

export default CategoryStoreList;
