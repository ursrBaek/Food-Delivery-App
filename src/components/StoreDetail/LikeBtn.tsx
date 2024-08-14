import React from 'react';
import { useUserId } from 'store';
import LoggedInLikeBtn from './LoggedInLikeBtn';
import useLoginCheck from 'hooks/useLoginCheck';

function LikeBtn({ storeId }: { storeId: number }) {
  const userId = useUserId();

  const clickLikeButton = useLoginCheck(userId);

  return userId ? (
    <LoggedInLikeBtn storeId={storeId} />
  ) : (
    <button onClick={clickLikeButton}>
      <i className="far fa-heart dib" /> 찜하기
    </button>
  );
}

export default LikeBtn;
