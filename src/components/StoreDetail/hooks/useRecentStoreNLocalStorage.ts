import { useEffect } from 'react';
import { useRecentStores, useRecentStoresActions } from 'store';
import { StoreInfo } from 'types/responseTypes';

const STORAGE_KEY_PREFIX = 'recentStores-';

function useRecentStoreNLocalStorage(storeDetailInfo: StoreInfo | undefined, userId: string | undefined) {
  const recentStores = useRecentStores();
  const { setRecentStore } = useRecentStoresActions();

  useEffect(() => {
    if (storeDetailInfo) {
      const STORAGE_KEY = STORAGE_KEY_PREFIX + (userId || '');
      const findIndex = recentStores.findIndex((store) => store.id === storeDetailInfo.id);
      let newRecentStores;

      if (findIndex === -1) {
        newRecentStores = [storeDetailInfo, ...recentStores];
      } else if (findIndex > 0) {
        newRecentStores = [...recentStores];
        const [store] = newRecentStores.splice(findIndex, 1);
        newRecentStores.unshift(store);
      }

      if (newRecentStores) {
        setRecentStore(newRecentStores);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecentStores));
      }
    }
  }, [storeDetailInfo, recentStores, setRecentStore, userId]);
}

export default useRecentStoreNLocalStorage;
