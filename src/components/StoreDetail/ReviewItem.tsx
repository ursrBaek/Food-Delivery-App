import React from 'react';
import { ReviewItemBox } from './styles';
import { IReview } from 'types/responseTypes';
import getCurrentDate from 'utils/getCurrentDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faStar} /> {star}
        </span>
        {getCurrentDate(date)}
      </p>
      <p className="review-txt">{content}</p>
    </ReviewItemBox>
  );
}

export default ReviewItem;
