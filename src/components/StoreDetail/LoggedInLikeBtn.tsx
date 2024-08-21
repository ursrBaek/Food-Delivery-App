import React from 'react';
import { useUserId } from 'store';
import useStoreLikeQuery from './hooks/useStoreLikeQuery';
import useSetLikeMutation, { ILikeSettingInfo } from './hooks/useSetLikeMutation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeart_R } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function LoggedInLikeBtn({ storeId }: { storeId: number }) {
  const userId = useUserId();

  const { isLoading, isError, data: likesData } = useStoreLikeQuery(userId, storeId.toString());

  const likeSettingInfo: ILikeSettingInfo = {
    userId,
    currentLikesState: Boolean(likesData?.currentLikesState),
    storeId: storeId,
  };

  const { mutate } = useSetLikeMutation();

  const clickLikeButton = () => {
    mutate(likeSettingInfo);
  };

  return (
    <button onClick={clickLikeButton}>
      {!(isLoading || isError) && likesData?.currentLikesState ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faHeart_R} />}{' '}
      찜하기
    </button>
  );
}

export default LoggedInLikeBtn;
