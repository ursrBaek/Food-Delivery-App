export interface StoreInfo {
  id: number;
  category: string;
  storeName: string;
  storeImg: string;
  minPrice: number;
  deliveryTime: number;
  deliveryTip: number;
  storeStar: number;
  reviewCount: number;
}

export interface IMenuItem {
  foodName: string;
  foodPrice: number;
  foodImage: string;
}

export interface IOrderItem extends IMenuItem {
  orderCount: number;
}

export interface IOrderListObj {
  [key: string]: IOrderItem;
}

export interface StoreDetailInfo extends StoreInfo {
  tel: string;
  menu: Array<IMenuItem>;
}

export interface IReview {
  star: number;
  content: string;
  date: number;
  nickname: string;
}

export interface IUserOrderListItemRes {
  key: string;
  storeName: string;
  totalAmount: number;
  deliveryTip: number;
  minPrice: number;
  orderList: IOrderListObj;
  storeId: string;
  storeImg: string;
  orderDate: number;
  review: boolean;
}

export interface IUserOrderListItemReq {
  storeName: string;
  totalAmount: number;
  deliveryTip: number;
  minPrice: number;
  storeImg: string;
  orderList: (IOrderItem | null)[];
  storeId: string;
  orderDate: object;
  review: boolean;
}
