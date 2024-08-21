import React from 'react';
import { useUserId } from 'store';
import LoggedInLikeBtn from './LoggedInLikeBtn';
import useLoginCheck from 'hooks/useLoginCheck';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LikeBtn({ storeId }: { storeId: number }) {
  const userId = useUserId();

  const clickLikeButton = useLoginCheck(userId);

  return userId ? (
    <LoggedInLikeBtn storeId={storeId} />
  ) : (
    <button onClick={clickLikeButton}>
      <FontAwesomeIcon icon={faHeart} /> 찜하기
    </button>
  );
}

export default LikeBtn;
