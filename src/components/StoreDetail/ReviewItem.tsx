import React from 'react';
import { ReviewItemBox } from './styles';
import { IReview } from 'types/responseTypes';
import getCurrentDate from 'utils/getCurrentDate';

interface Props {
  reviewInfo: IReview;
}

function ReviewItem({ reviewInfo }: Props) {
  const { star, content, date, nickname } = reviewInfo;

  return (
    <ReviewItemBox>
      <p className="review-nick">{nickname}</p>
      <p className="review-date">
        <span>
          <i className="fas fa-star"></i> {star}
        </span>
        {getCurrentDate(date)}
      </p>
      <p className="review-txt">{content}</p>
    </ReviewItemBox>
  );
}

export default ReviewItem;
