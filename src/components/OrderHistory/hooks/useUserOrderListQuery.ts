import { get, orderByChild, query, ref } from 'firebase/database';
import { IOrderItem, IOrderListObj, IUserOrderListItemRes } from 'types/responseTypes';
import { db } from '../../../firebase';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import convertOrderListObjToArray from 'utils/convertOrderListObjToArray';

export const userOrderListApi = async (userId: string): Promise<IUserOrderListItemRes<(IOrderItem | null)[]>[]> => {
  const orderList: IUserOrderListItemRes<(IOrderItem | null)[]>[] = [];

  try {
    if (!userId) return [];
    const snapshot = await get(query(ref(db, `users/${userId}/orderList`), orderByChild('orderDate')));

    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        const orderInfo: IUserOrderListItemRes<IOrderListObj> = child.val();
        const generatedArrayFromObj: (IOrderItem | null)[] = convertOrderListObjToArray(orderInfo.orderList);
        orderList.push({ ...child.val(), orderList: generatedArrayFromObj, key: child.key });
      });
    }

    return orderList.reverse();
  } catch (error) {
    console.error('Error fetching user order list:', error);
    return [];
  }
};

const useUserOrderListQuery = (userId: string): UseQueryResult<Array<IUserOrderListItemRes<(IOrderItem | null)[]>>, Error> =>
  useQuery({
    queryKey: ['userOrderList', userId],
    queryFn: () => userOrderListApi(userId),
    staleTime: 600000,
    gcTime: 900000,
  });

export default useUserOrderListQuery;
