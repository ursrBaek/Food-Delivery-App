import { IOrderItem, IOrderListObj } from 'types/responseTypes';

const convertOrderListObjToArray = (orderListObj: IOrderListObj): (IOrderItem | null)[] => {
  const generatedArrayFromObj: (IOrderItem | null)[] = [];
  for (const idx in orderListObj) {
    generatedArrayFromObj[+idx] = orderListObj[idx];
  }
  return generatedArrayFromObj;
};

export default convertOrderListObjToArray;
