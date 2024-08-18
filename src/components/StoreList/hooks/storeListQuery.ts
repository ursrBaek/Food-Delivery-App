import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { StoreInfo } from 'types/responseTypes';
import { getDataFromDB } from 'utils/getDataFromDB';

interface StoreIdListResponse {
  [key: string]: StoreInfo;
}

// 카테고리 해당 가게 리스트 가져오기
export const getStoreListOfCategoryApi = async (category: string): Promise<StoreInfo[]> => {
  try {
    const storeListOfCategory = await getDataFromDB<StoreIdListResponse>(`category/${category}`);
    const storeList: StoreInfo[] = [];

    if (storeListOfCategory) {
      for (const idx in storeListOfCategory) {
        storeList.push(storeListOfCategory[idx]);
      }
    }

    return storeList;
  } catch (error) {
    console.log('Error fetching storeList of category');
    return [];
  }
};

// query
export const useStoreListOfCategoryQuery = (category: string): UseQueryResult<StoreInfo[], Error> => {
  return useQuery({
    queryKey: ['storeListOfCategory', category],
    queryFn: () => getStoreListOfCategoryApi(category),
    staleTime: 300000,
    gcTime: 600000,
  });
};

// 좋아요 한 가게 리스트 가져오기

interface LikedStoreIdListResponse {
  [key: string]: boolean;
}

export const getStoreListOfLikeApi = async (userId: string): Promise<StoreInfo[]> => {
  try {
    const stores = await getDataFromDB<StoreIdListResponse>(`stores`);
    const likes = await getDataFromDB<LikedStoreIdListResponse>(`users/${userId}/likes`);
    const myLikesStore: StoreInfo[] = [];

    if (likes && stores) {
      const likedStoreIds = Object.keys(likes).map(Number);
      likedStoreIds.forEach((storeId) => {
        const storeInfo = stores[storeId];
        if (storeInfo) {
          myLikesStore.push(storeInfo);
        }
      });
    }

    return myLikesStore;
  } catch (error) {
    console.error('Error fetching liked store list:', error);
    return [];
  }
};

export const useStoreListOfLikeQuery = (userId: string): UseQueryResult<StoreInfo[], Error> =>
  useQuery({
    queryKey: ['storeListOfLikes', userId],
    queryFn: () => getStoreListOfLikeApi(userId),
    staleTime: 300000,
    gcTime: 600000,
  });
