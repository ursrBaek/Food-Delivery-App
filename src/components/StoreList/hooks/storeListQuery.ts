import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { StoreInfo } from 'types/responseTypes';
import { getDataFromDB } from 'utils/getDataFromDB';

interface StoreListResponse {
  [key: string]: StoreInfo;
}

interface StoreIdListResponse {
  [key: string]: boolean;
}

// get data api
export const getStoreListOfCategoryApi = async (category: string) => {
  const data = await getDataFromDB(`category/${category}`);
  const storeList: Array<StoreInfo> = [];

  if (data) {
    for (const key in data as StoreListResponse) {
      storeList.push(data[key]);
    }
  }

  return storeList;
};

export const getStoreListOfLikeApi = async (userId: string) => {
  const stores = await getDataFromDB(`stores`);
  const likes = await getDataFromDB(`users/${userId}/likes`);
  const myLikesStore: Array<StoreInfo> = [];
  let likesStoreIdArray = [];

  if (likes) {
    for (const key in likes as StoreIdListResponse) {
      likesStoreIdArray.push(+key);
    }

    if (stores) {
      likesStoreIdArray.forEach((storeId) => {
        myLikesStore.push(stores[storeId]);
      });
    }
  }

  return myLikesStore;
};

// query
export const useStoreListOfCategoryQuery = (category: string): UseQueryResult<Array<StoreInfo>, Error> => {
  return useQuery({
    queryKey: ['storeListOfCategory', category],
    queryFn: () => getStoreListOfCategoryApi(category),
  });
};

export const useStoreListOfLikeQuery = (userId: string): UseQueryResult<Array<StoreInfo>, Error> =>
  useQuery({
    queryKey: ['storeListOfLikes', userId],
    queryFn: () => getStoreListOfLikeApi(userId),
  });
