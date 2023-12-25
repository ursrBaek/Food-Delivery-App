import React from 'react';
import { StyledInfoBox } from './styles';

function StoreInfo() {
  return (
    <StyledInfoBox>
      <span className="store-name">명랑핫도그 성수카페거리점</span>
      <p className="store-info">
        <span className="star">
          <i className="fas fa-star"></i> 4.5 | 리뷰 34개
        </span>
      </p>
      <button>
        <i className="far fa-heart dib" /> 찜하기
      </button>
    </StyledInfoBox>
  );
}

export default StoreInfo;
