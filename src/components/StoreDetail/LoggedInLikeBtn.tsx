import React from 'react';
import { useUserId } from 'store';
import useStoreLikeQuery from './hooks/useStoreLikeQuery';
import useSetLikeMutation, { ILikeSettingInfo } from './hooks/useSetLikeMutation';

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
      {!(isLoading || isError) && likesData?.currentLikesState ? <i className="fas fa-heart dib" /> : <i className="far fa-heart dib" />}{' '}
      찜하기
    </button>
  );
}

export default LoggedInLikeBtn;
