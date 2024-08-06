import React from 'react';
import BottomMenu from 'components/common/BottomMenu';
import Header from 'components/common/Header';
import { useParams } from 'react-router-dom';
import StoreListContents from './StoreListContents';
import { categoryName } from 'utils/common';

export default function StoreList() {
  const { category } = useParams();

  return (
    <>
      <Header>{category ? categoryName[category] : '찜한 가게'}</Header>
      <StoreListContents />
      <BottomMenu />
    </>
  );
}
