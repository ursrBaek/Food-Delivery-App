import React from 'react';
import BottomMenu from 'components/common/BottomMenu';
import Header from 'components/common/Header';
import { useParams } from 'react-router-dom';
import { categoryName } from 'utils/common';
import CategoryStoreList from './CategoryStoreList';
import LikedStoreList from './LikedStoreList';
import LoginCheckComp from 'components/common/LoginCheckComp';

export default function StoreList() {
  const { category } = useParams();

  return (
    <>
      <Header>{category ? categoryName[category] : '찜한 가게'}</Header>

      {category ? (
        <CategoryStoreList />
      ) : (
        <LoginCheckComp>
          <LikedStoreList />
        </LoginCheckComp>
      )}
      <BottomMenu />
    </>
  );
}
