import { IOrderItem } from 'types/responseTypes';

interface ICategoryName {
  [key: string]: string;
}

export const categoryName: ICategoryName = {
  chicken: '치킨',
  chineseFood: '중식',
  dessert: '디저트',
  dish: '안주',
  fastFood: '패스트푸드',
  japaneseFood: '일식',
  koreanFood: '한식',
  pizza: '피자',
  schoolFood: '분식',
  salad: '샐러드',
};

export function getCategory(storeId: string) {
  const id = +storeId;
  if (id >= 0 && id <= 4) {
    return 'fastFood';
  } else if (id >= 5 && id <= 9) {
    return 'dessert';
  } else if (id >= 10 && id <= 14) {
    return 'chicken';
  } else if (id >= 15 && id <= 19) {
    return 'pizza';
  } else if (id >= 20 && id <= 24) {
    return 'schoolFood';
  } else if (id >= 25 && id <= 29) {
    return 'dish';
  } else if (id >= 30 && id <= 34) {
    return 'koreanFood';
  } else if (id >= 35 && id <= 39) {
    return 'chineseFood';
  } else if (id >= 40 && id <= 44) {
    return 'japaneseFood';
  }
}

export const getOrderListAndCount = (orderList: (IOrderItem | null)[]) => {
  const firstMenu: string | undefined = orderList.find((order) => order?.foodName)?.foodName;
  const menuCount = orderList.reduce((cal, curr, i) => {
    return cal + (curr?.orderCount || 1);
  }, 0);

  return { firstMenu, menuCount };
};
