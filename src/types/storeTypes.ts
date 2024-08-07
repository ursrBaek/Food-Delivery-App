import { IOrderItem, IUserOrderListItemRes } from './responseTypes';

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
    setStoreName: (storeName: string) => void;
    setStoreId: (paramsStoreId: string) => void;
    setStoreImg: (storeImg: string) => void;
    setMinPrice: (minPrice: number) => void;
    setDeliveryTip: (deliveryTip: number) => void;
    setOrderSameMenu: (orderInfo: IUserOrderListItemRes) => void;
    addMenu: (idx: number, menu: IOrderItem) => void;
    deleteMenu: (idx: number) => void;
    increaseMenuCount: (idx: number) => void;
    decreaseMenuCount: (idx: number) => void;
  };
}
