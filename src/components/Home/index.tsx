import React from 'react';
import Header from 'components/common/Header';
import BottomMenu from 'components/common/BottomMenu';
import Main from './Main';

export default function Home() {
  return (
    <>
      <Header>오늘 뭐먹지?</Header>
      <Main />
      <BottomMenu />
    </>
  );
}
