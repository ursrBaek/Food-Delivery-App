import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { StoreInfo } from 'types/responseTypes';
import { getDataFromDB } from 'utils/getDataFromDB';

interface StoreListResponse {
  [key: string]: StoreInfo;
}

export const getStoreListOfCategoryApi = async (category?: string) => {
  const data = await getDataFromDB(`category/${category}`);
  const storeList: Array<StoreInfo> = [];

  if (data) {
    for (const key in data as StoreListResponse) {
      storeList.push(data[key]);
    }
  }

  return storeList;
};

export const useStoreListOfCategoryQuery = (category?: string): UseQueryResult<Array<StoreInfo>, Error> => {
  return useQuery({
    queryKey: ['storeListOfCategory', category],
    queryFn: () => getStoreListOfCategoryApi(category),
  });
};
