import ReviewItem from './ReviewItem';
import { ReviewInfoBox } from './styles';

function ReviewList() {
  return (
    <>
      <ReviewInfoBox>
        <span>
          <span>
            <i className="fas fa-star"></i> 4.5
          </span>
          <span>|</span>
          <span>리뷰 2개</span>
        </span>
        <button>리뷰쓰기</button>
      </ReviewInfoBox>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </>
  );
}

export default ReviewList;
