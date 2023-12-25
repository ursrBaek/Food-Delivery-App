import React from 'react';
import { ReviewItemBox } from './styles';

function ReviewItem() {
  return (
    <ReviewItemBox>
      <p className="review-nick">밥사랑</p>
      <p className="review-date">
        <span>
          <i className="fas fa-star"></i> 4.5
        </span>
        2023년 12월 31일 11:25:39
      </p>
      <p className="review-txt">정말 맛있습니다. 또 먹고싶네요. 많이파세요.</p>
    </ReviewItemBox>
  );
}

export default ReviewItem;
