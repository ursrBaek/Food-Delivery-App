import React from 'react';
import { StyledInfoBox } from './styles';
import { StoreDetailInfo } from 'types/responseTypes';
import { useUserId } from 'store';
import useStoreLikeQuery from './hooks/useStoreLikeQuery';
import useLoginCheck from 'hooks/useLoginCheck';
import useSetLikeMutation, { ILikeSettingInfo } from './hooks/useSetLikeMutation';

interface Props {
  storeDetailInfo: StoreDetailInfo;
}

function StoreInfo({ storeDetailInfo }: Props) {
  const userId = useUserId();

  const { isLoading, isError, data: likesData } = useStoreLikeQuery(userId, storeDetailInfo.id.toString());

  const likeSettingInfo: ILikeSettingInfo = {
    userId,
    currentLikesState: Boolean(likesData?.currentLikesState),
    storeId: storeDetailInfo.id,
  };

  const { mutate } = useSetLikeMutation();

  const clickLikeButton = useLoginCheck(userId, () => {
    mutate(likeSettingInfo);
  });

  return (
    <StyledInfoBox>
      <span className="store-name">{storeDetailInfo.storeName}</span>
      <p className="store-info">
        <span className="star">
          <i className="fas fa-star"></i> {storeDetailInfo.storeStar} | 리뷰 {storeDetailInfo.reviewCount}개
        </span>
      </p>
      <button onClick={clickLikeButton}>
        {!(isLoading || isError) && likesData?.currentLikesState ? <i className="fas fa-heart dib" /> : <i className="far fa-heart dib" />}{' '}
        찜하기
      </button>
    </StyledInfoBox>
  );
}

export default StoreInfo;
