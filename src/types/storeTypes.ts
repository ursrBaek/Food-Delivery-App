import { IOrderItem, IUserOrderListItemRes, StoreInfo } from './responseTypes';

export interface IUserStore {
  loading: boolean;
  id: string;
  nickname: string;
  actions: {
    setLoading: (loading: boolean) => void;
    setId: (id: string) => void;
    setNickname: (nickname: string) => void;
    setInitUser: () => void;
  };
}

export interface IOrderStore {
  storeName: string;
  storeId: string;
  storeImg: string;
  minPrice: number;
  deliveryTip: number;
  orderList: Array<IOrderItem | null>;
  totalAmount: number;
  orderDate: string;
  actions: {
    setOrderInit: () => void;
    setOrderDate: (time: string) => void;
    setCurrentStoreInfo: (storeId: string, storeName: string, deliveryTip: number, minPrice: number, storeImg: string) => void;
    setOrderSameMenu: (orderInfo: IUserOrderListItemRes<Array<IOrderItem | null>>) => void;
    addMenu: (idx: number, menu: IOrderItem) => void;
    deleteMenu: (idx: number) => void;
    increaseMenuCount: (idx: number) => void;
    decreaseMenuCount: (idx: number) => void;
  };
}

export interface IRecentStores {
  loading: boolean;
  recentStores: StoreInfo[];
  actions: {
    setRecentStoreLoading: (bool: boolean) => void;
    setRecentStore: (stores: StoreInfo[]) => void;
  };
}
