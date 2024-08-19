import Header from 'components/common/Header';
import React, { useState } from 'react';
import StoreInfo from './StoreInfo';
import StoreOrderInfo from './StoreOrderInfo';
import { MainBox } from './styles';
import StoreDetailMain from './StoreDetailMain';
import PrevButton from 'components/common/PrevButton';
import { useParams } from 'react-router-dom';
import useStoreDetailQuery from './hooks/useStoreDetailQuery';
import { Message } from 'components/common/styles';
import useRecentStoreNLocalStorage from './hooks/useRecentStoreNLocalStorage';
import useThrottle from 'hooks/useThrottle';

export default function StoreDetail() {
  const { storeId } = useParams();

  const [isAboveScrollPoint, setIsAboveScrollPoint] = useState(true);

  if (!storeId) {
    throw new Error('매장 id 추출 중 오류발생.');
  }

  const { isLoading, data: storeDetailInfo, isError, error } = useStoreDetailQuery(storeId);

  // 로컬스토리지에 넣기
  useRecentStoreNLocalStorage(storeDetailInfo);

  const onScroll = useThrottle((e: React.UIEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.scrollTop > 100) {
      setIsAboveScrollPoint(false);
    } else {
      setIsAboveScrollPoint(true);
    }
  }, 300);

  return (
    <>
      <Header isAboveScrollPoint={isAboveScrollPoint}>{isError ? '???' : storeDetailInfo?.storeName || '...'}</Header>
      <PrevButton isAbsolutePosition={true} />

      <MainBox onScroll={onScroll}>
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
