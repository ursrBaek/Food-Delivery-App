import { IOrderItem, IUserOrderListItemRes } from 'types/responseTypes';
import { isThisMonth } from './isThisMonth';

export default function calculateOrderCountInThisMonth(orderHistoryList: IUserOrderListItemRes<(IOrderItem | null)[]>[]): number {
  let count = 0;

  for (let i = 0; orderHistoryList.length > i; i++) {
    const checkDate = orderHistoryList[i].orderDate;

    if (isThisMonth(checkDate)) {
      count++;
    } else {
      break;
    }
  }

  return count;
}
