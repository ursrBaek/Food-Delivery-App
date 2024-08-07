import { StoreDetailInfo } from 'types/responseTypes';
import ReviewItem from './ReviewItem';
import { Empty, Loading, ReviewInfoBox } from './styles';
import { useParams } from 'react-router-dom';
import useReviewQuery from './hooks/useReviewQuery';

interface Props {
  storeDetailInfo: StoreDetailInfo;
}

function ReviewList({ storeDetailInfo }: Props) {
  const { storeId } = useParams();

  const { data: reviewList, isLoading } = useReviewQuery(storeId as string);

  return (
    <>
      <ReviewInfoBox>
        <span>
          <span>
            <i className="fas fa-star"></i> {storeDetailInfo.storeStar}
          </span>
          <span>|</span>
          <span>리뷰 {storeDetailInfo.reviewCount}개</span>
        </span>
      </ReviewInfoBox>
      {isLoading ? (
        <Loading>로딩중...</Loading>
      ) : reviewList?.length ? (
        reviewList.map((review, idx) => <ReviewItem key={idx} reviewInfo={review} />)
      ) : (
        <Empty>작성된 리뷰가 없습니다.</Empty>
      )}
    </>
  );
}

export default ReviewList;
