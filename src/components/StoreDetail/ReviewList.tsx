import { StoreDetailInfo } from 'types/responseTypes';
import ReviewItem from './ReviewItem';
import { Empty, Loading, ReviewInfoBox } from './styles';
import useReviewQuery from './hooks/useReviewQuery';

interface Props {
  storeDetailInfo: StoreDetailInfo;
}

function ReviewList({ storeDetailInfo }: Props) {
  const { data: reviewList, isLoading, isError } = useReviewQuery(storeDetailInfo.id.toString() as string);

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
      {isError && <Empty>리뷰를 불러오는 중 문제가 발생했습니다.</Empty>}
    </>
  );
}

export default ReviewList;
