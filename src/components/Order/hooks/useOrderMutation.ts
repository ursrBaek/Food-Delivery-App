import { child, push, ref, set } from '@firebase/database';
import { db } from '../../../firebase';
import { IOrderListObj, IUserOrderListItemReq, IUserOrderListItemRes } from 'types/responseTypes';
import { getDataFromDB } from 'utils/getDataFromDB';
import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';

export interface IOrderInfo {
  userId?: string;
  orderDetail: IUserOrderListItemReq;
}

const addOrderedInfoApi = async (orderInfo: IOrderInfo): Promise<IUserOrderListItemRes<IOrderListObj> | undefined | null> => {
  const key = push(child(ref(db), `users/${orderInfo.userId}/orderList`)).key;
  await set(ref(db, `users/${orderInfo.userId}/orderList/` + key), orderInfo.orderDetail);

  const orderedInfo: IUserOrderListItemRes<IOrderListObj> | undefined | null = await getDataFromDB(
    `users/${orderInfo.userId}/orderList/${key}`,
  );

  return orderedInfo;
};

export default function useOrderMutation(): UseMutationResult<IUserOrderListItemRes<IOrderListObj> | undefined | null, Error, IOrderInfo> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addOrderedInfoApi,
    onError(err) {
      alert('주문처리 중 문제가 발생했습니다.');
      console.log(err);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['userOrderList'],
      });
    },
  });
}
