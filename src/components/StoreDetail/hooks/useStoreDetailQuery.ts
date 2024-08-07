import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { StoreDetailInfo } from 'types/responseTypes';
import { getDataFromDB } from 'utils/getDataFromDB';

export const getStoreDetailApi = async (storeId: string) => {
  const data = await getDataFromDB(`detailStores/${storeId}`);
  return data;
};

const useStoreDetailQuery = (storeId: string): UseQueryResult<StoreDetailInfo, Error> =>
  useQuery({
    queryKey: ['storeList', storeId],
    queryFn: () => getStoreDetailApi(storeId),
    staleTime: 3000,
  });

export default useStoreDetailQuery;
