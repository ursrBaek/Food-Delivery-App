import React from 'react';
import BottomMenu from 'components/common/BottomMenu';
import Header from 'components/common/Header';
import { useParams } from 'react-router-dom';
import StoreListContents from './StoreListContents';

export default function StoreList() {
  const { category } = useParams();

  return (
    <>
      <Header>{category ? category : '찜한 가게'}</Header>
      <StoreListContents />
      <BottomMenu />
    </>
  );
}
