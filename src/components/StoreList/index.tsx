import BottomMenu from 'components/common/BottomMenu';
import Header from 'components/common/Header';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function StoreList() {
  const { category } = useParams();

  return (
    <>
      <Header>{category ? category : '찜한 가게'}</Header>

      <BottomMenu />
    </>
  );
}
