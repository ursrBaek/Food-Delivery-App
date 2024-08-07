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
