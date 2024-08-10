import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { db } from '../../../firebase';
import { get, orderByChild, query, ref } from 'firebase/database';
import { IReview } from 'types/responseTypes';

export const getReviewApi = async (storeId: string) => {
  let reviewList: IReview[] = [];
  await get(query(ref(db, `reviews/${storeId}`), orderByChild('date'))).then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        reviewList.push({
          ...child.val(),
        });
        return false;
      });
    }
  });

  return reviewList.reverse();
};

const useReviewQuery = (storeId: string): UseQueryResult<IReview[], Error> =>
  useQuery({
    queryKey: ['reviews', storeId],
    queryFn: () => getReviewApi(storeId),
    staleTime: 5000,
  });

export default useReviewQuery;
