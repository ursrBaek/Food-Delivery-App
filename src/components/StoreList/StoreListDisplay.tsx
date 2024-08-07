import React from 'react';
import { StyledContainer } from './styles';
import { Message } from 'components/common/styles';
import { StoreInfo } from 'types/responseTypes';
import StoreListContents from './StoreListContents';

interface Props {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  storeLists: StoreInfo[] | undefined;
}

function StoreListDisplay({ isLoading, isError, error, storeLists }: Props) {
  return (
    <StyledContainer>
      {isLoading && <Message>{'로딩중...'}</Message>}
      {isError && (
        <Message $error={isError.toString()}>
          {'문제가 발생했습니다.'}
          <br />
          {error?.message}
        </Message>
      )}
      {storeLists && <StoreListContents storeLists={storeLists} />}
    </StyledContainer>
  );
}

export default StoreListDisplay;
