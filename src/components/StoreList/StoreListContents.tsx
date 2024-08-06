import React from 'react';
import { StyledContainer } from './styles';
import StoreItem from './StoreItem';
import { useStoreListOfCategoryQuery } from './hooks/storeListQuery';
import { useParams } from 'react-router-dom';
import { Message } from 'components/common/styles';

function StoreListContents() {
  const { category } = useParams();

  const { isLoading, data: storeLists, isError, error } = useStoreListOfCategoryQuery(category);

  return (
    <StyledContainer>
      {isLoading && <Message>{'로딩중...'}</Message>}
      {isError && (
        <Message error={isError}>
          {'문제가 발생했습니다.'}
          <br />
          {error?.message}
        </Message>
      )}
      {storeLists && storeLists.map((store) => <StoreItem key={store.id} store={store} />)}
    </StyledContainer>
  );
}

export default StoreListContents;
