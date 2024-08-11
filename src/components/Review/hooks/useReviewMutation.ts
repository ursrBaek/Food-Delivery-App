import { ref, set, update } from '@firebase/database';
import { db } from '../../../firebase';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { getReviewApi } from 'components/StoreDetail/hooks/useReviewQuery';
import { getCategory } from 'utils/common';

export interface IReviewInfo {
  userId: string;
  storeId: string;
  key: string;
  review: {
    nickname: string;
    star: number;
    content: string;
    date: object;
  };
}

export interface IReviewPostResponse {
  write: boolean;
}

interface IUpdateFirebaseObj {
  [key: string]: number | string | boolean;
}

export const addReviewApi = async (reviewInfo: IReviewInfo) => {
  const { userId, storeId, review, key } = reviewInfo;
  await set(ref(db, `reviews/${storeId}/` + key), review);

  const newReviewList = await getReviewApi(storeId);

  const reviewCount = newReviewList.length;
  const averageStar = (newReviewList.reduce((curr, reviewItem) => curr + reviewItem.star, 0) / reviewCount).toFixed(1);

  const dbUpdateInfo: IUpdateFirebaseObj = {};

  dbUpdateInfo[`category/${getCategory(storeId)}/${storeId}/reviewCount`] = reviewCount;
  dbUpdateInfo[`category/${getCategory(storeId)}/${storeId}/storeStar`] = averageStar;

  dbUpdateInfo[`detailStores/${storeId}/reviewCount`] = reviewCount;
  dbUpdateInfo[`detailStores/${storeId}/storeStar`] = averageStar;

  dbUpdateInfo[`stores/${storeId}/reviewCount`] = reviewCount;
  dbUpdateInfo[`stores/${storeId}/storeStar`] = averageStar;

  dbUpdateInfo[`users/${userId}/orderList/${key}/review`] = true;

  await update(ref(db), dbUpdateInfo);
};

export default function useReviewMutation(): UseMutationResult<void, Error, IReviewInfo> {
  return useMutation({
    mutationFn: addReviewApi,
    onError(err) {
      console.log(err);
    },
  });
}
