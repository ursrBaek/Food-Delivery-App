import React, { useState } from 'react';
import MenuList from './MenuList';
import ReviewList from './ReviewList';
import { StyledTab } from './styles';
import { StoreDetailInfo } from 'types/responseTypes';

interface Props {
  storeDetailInfo: StoreDetailInfo;
}

function StoreDetailMain({ storeDetailInfo }: Props) {
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
      {selectedTab === 'menu' ? <MenuList storeDetailInfo={storeDetailInfo} /> : <ReviewList storeDetailInfo={storeDetailInfo} />}
    </>
  );
}

export default React.memo(StoreDetailMain);
