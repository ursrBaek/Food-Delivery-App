import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { StoreInfo } from 'types/responseTypes';
import { getDataFromDB } from 'utils/getDataFromDB';

export interface StoreIdListResponse {
  [key: string]: StoreInfo;
}

export const getAllStoresApi = async (): Promise<StoreIdListResponse | null> => {
  try {
    const stores = await getDataFromDB<StoreIdListResponse>(`stores`);
    return stores;
  } catch (error) {
    console.error('Error fetching all store info:', error);
    return null;
  }
};

export const useAllStoresQuery = (): UseQueryResult<StoreIdListResponse | null, Error> =>
  useQuery({
    queryKey: ['allStores'],
    queryFn: () => getAllStoresApi(),
    // 잘 안바뀌는 값. 오래 캐시해야됨.
  });