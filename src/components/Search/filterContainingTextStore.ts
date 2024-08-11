import { StoreInfo } from 'types/responseTypes';
import { StoreIdListResponse } from './hooks/useAllStoresQuery';

const filterContainingTextStore = (storesObj: StoreIdListResponse, text: string) => {
  const storeArr: StoreInfo[] = [];
  for (const idx in storesObj) {
    const store = storesObj[idx];
    if (store.storeName.includes(text)) {
      storeArr.push(store);
    }
  }

  return storeArr;
};

export default filterContainingTextStore;
