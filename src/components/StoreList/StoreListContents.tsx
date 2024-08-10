import React from 'react';
import StoreItem from './StoreItem';
import { StoreInfo } from 'types/responseTypes';
import { useParams } from 'react-router-dom';
import { Message } from 'components/common/styles';

interface Props {
  storeLists: StoreInfo[];
}

function StoreListContents({ storeLists }: Props) {
  const { category } = useParams();

  const isLikedStoreListPage = !category;

  return (
    <>
      {storeLists.map((store) => (
        <StoreItem key={store.id} store={store} />
      ))}
      {isLikedStoreListPage && storeLists.length === 0 && <Message>{'찜하기 한 가게가 없습니다.'}</Message>}
    </>
  );
}

export default StoreListContents;
