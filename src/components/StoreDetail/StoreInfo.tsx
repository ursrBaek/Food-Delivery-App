import React from 'react';
import { StyledInfoBox } from './styles';
import { StoreDetailInfo } from 'types/responseTypes';
import LikeBtn from './LikeBtn';

interface Props {
  storeDetailInfo: StoreDetailInfo;
}

function StoreInfo({ storeDetailInfo }: Props) {
  return (
    <StyledInfoBox>
      <span className="store-name">{storeDetailInfo.storeName}</span>
      <p className="store-info">
        <span className="star">
          <i className="fas fa-star"></i> {storeDetailInfo.storeStar} | 리뷰 {storeDetailInfo.reviewCount}개
        </span>
      </p>
      <LikeBtn storeId={storeDetailInfo.id} />
    </StyledInfoBox>
  );
}

export default React.memo(StoreInfo);
