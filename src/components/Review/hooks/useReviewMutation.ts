import { ref, set, update } from '@firebase/database';
import { db } from '../../../firebase';
import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
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

  // fetching 하지 않고 쿼리데이터 가져오는것도 가능하면 그렇게 하자!!!
  // -------------
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addReviewApi,
    onError(err) {
      console.log(err);
    },
    onSuccess: (data, reviewInfo) => {
      queryClient.invalidateQueries({
        queryKey: ['reviews', reviewInfo.storeId],
      });
      queryClient.invalidateQueries({
        queryKey: ['storeDetail', reviewInfo.storeId],
      });
      queryClient.invalidateQueries({
        queryKey: ['storeListOfLikes', reviewInfo.userId],
      });
      queryClient.invalidateQueries({
        queryKey: ['storeListOfCategory'],
      });
    },
  });
}
