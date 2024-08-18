import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getDataFromDB } from 'utils/getDataFromDB';

interface ILike {
  currentLikesState: boolean;
}

export const getLikeStateApi = async (userId?: string, storeId?: string) => {
  const data = await getDataFromDB(`/users/${userId}/likes/${storeId}`);
  return { currentLikesState: Boolean(data) };
};

const useStoreLikeQuery = (userId?: string, storeId?: string): UseQueryResult<ILike, Error> =>
  useQuery({
    queryKey: ['isLike', userId, storeId],
    queryFn: () => getLikeStateApi(userId, storeId),
    staleTime: 600000,
    gcTime: 900000,
  });

export default useStoreLikeQuery;
