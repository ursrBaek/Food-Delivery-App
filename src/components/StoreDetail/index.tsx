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

export default function StoreDetail() {
  const { storeId } = useParams();

  if (!storeId) {
    throw new Error('매장 id 추출 중 오류발생.');
  }

  const { isLoading, data: storeDetailInfo, isError, error } = useStoreDetailQuery(storeId);

  return (
    <>
      <Header>{isError ? '???' : storeDetailInfo?.storeName || '...'}</Header>
      <PrevButton isAbsolutePosition={true} />

      <MainBox>
        {isLoading || isError ? (
          <Message error={isError}>
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
