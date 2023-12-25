import React, { useState } from 'react';
import MenuList from './MenuList';
import ReviewList from './ReviewList';
import { StyledTab } from './styles';

function StoreDetailMain() {
  const [selectedTab, setSelectedTab] = useState('menu');

  return (
    <>
      <StyledTab>
        <button className={selectedTab === 'menu' ? 'selected' : ''} onClick={() => setSelectedTab('menu')}>
          메뉴
        </button>
        <button className={selectedTab === 'review' ? 'selected' : ''} onClick={() => setSelectedTab('review')}>
          리뷰
        </button>
      </StyledTab>
      {selectedTab === 'menu' ? <MenuList /> : <ReviewList />}
    </>
  );
}

export default React.memo(StoreDetailMain);
