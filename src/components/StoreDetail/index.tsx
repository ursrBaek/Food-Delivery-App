import Header from 'components/common/Header';
import React from 'react';
import StoreInfo from './StoreInfo';
import StoreOrderInfo from './StoreOrderInfo';
import { MainBox } from './styles';
import StoreDetailMain from './StoreDetailMain';
import PrevButton from 'components/common/PrevButton';
import { useParams } from 'react-router-dom';
import useStoreDetailQuery from './hooks/useStoreDetailQuery';
import { Message } from 'components/common/styles';
import { useUserId } from 'store';
import useRecentStoreNLocalStorage from './hooks/useRecentStoreNLocalStorage';

export default function StoreDetail() {
  const { storeId } = useParams();

  if (!storeId) {
    throw new Error('매장 id 추출 중 오류발생.');
  }

  const userId = useUserId();
  const { isLoading, data: storeDetailInfo, isError, error } = useStoreDetailQuery(storeId);

  // 로컬스토리지에 넣기
  useRecentStoreNLocalStorage(storeDetailInfo, userId);

  return (
    <>
      <Header>{isError ? '???' : storeDetailInfo?.storeName || '...'}</Header>
      <PrevButton isAbsolutePosition={true} />

      <MainBox>
        {isLoading || isError ? (
          <Message $error={isError ? 'true' : ''}>
            {isLoading && 'Loading...'}
            {isError && 'Error가 발생했습니다.'}
            <br />
            {error && error.message}
          </Message>
        ) : (
          storeDetailInfo && (
            <>
              <StoreInfo storeDetailInfo={storeDetailInfo} />
              <StoreOrderInfo storeDetailInfo={storeDetailInfo} />
              <StoreDetailMain storeDetailInfo={storeDetailInfo} />
            </>
          )
        )}
      </MainBox>
    </>
  );
}
