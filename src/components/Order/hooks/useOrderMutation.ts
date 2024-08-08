import { child, push, ref, set } from '@firebase/database';
import { db } from '../../../firebase';
import { IUserOrderListItemReq, IUserOrderListItemRes } from 'types/responseTypes';
import { getDataFromDB } from 'utils/getDataFromDB';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export interface IOrderInfo {
  userId?: string;
  orderDetail: IUserOrderListItemReq;
}

const addOrderedInfoApi = async (orderInfo: IOrderInfo): Promise<IUserOrderListItemRes | undefined> => {
  const key = push(child(ref(db), `users/${orderInfo.userId}/orderList`)).key;
  await set(ref(db, `users/${orderInfo.userId}/orderList/` + key), orderInfo.orderDetail);

  const orderedInfo = await getDataFromDB(`users/${orderInfo.userId}/orderList/${key}`);

  if (orderedInfo) {
    return orderedInfo;
  }
};

export default function useOrderMutation(): UseMutationResult<IUserOrderListItemRes | undefined, Error, IOrderInfo> {
  return useMutation({
    mutationFn: addOrderedInfoApi,
    onError(err) {
      alert('주문처리 중 문제가 발생했습니다.');
      console.log(err);
    },
  });
}
