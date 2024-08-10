import { IOrderItem, IOrderListObj } from 'types/responseTypes';

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

export const getOrderListAndCount = (orderList: IOrderListObj) => {
  const menuList: IOrderItem[] = [];
  for (const key in orderList) {
    const menu = orderList[key];
    if (menu !== null) {
      menuList.push(menu);
    }
  }
  const menuCount = menuList.reduce((cal, curr, i) => {
    return cal + (curr?.orderCount || 1);
  }, 0);

  return { menuList, menuCount };
};
