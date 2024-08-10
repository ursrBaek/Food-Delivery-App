import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { StoreDetailInfo } from 'types/responseTypes';
import { getDataFromDB } from 'utils/getDataFromDB';

export const getStoreDetailApi = async (storeId: string): Promise<StoreDetailInfo | null> => {
  try {
    const storeDetailInfo = await getDataFromDB<StoreDetailInfo>(`detailStores/${storeId}`);
    if (storeDetailInfo) {
      return storeDetailInfo;
    }
    return null;
  } catch (error) {
    console.error('Error fetching store details:', error);
    return null;
  }
};

const useStoreDetailQuery = (storeId: string): UseQueryResult<StoreDetailInfo, Error> =>
  useQuery({
    queryKey: ['storeList', storeId],
    queryFn: () => getStoreDetailApi(storeId),
    staleTime: 3000,
  });

export default useStoreDetailQuery;
