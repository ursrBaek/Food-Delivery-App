import { get, orderByChild, query, ref } from 'firebase/database';
import { IUserOrderListItemRes } from 'types/responseTypes';
import { db } from '../../../firebase';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const userOrderListApi = async (userId: string): Promise<IUserOrderListItemRes[]> => {
  const orderList: IUserOrderListItemRes[] = [];

  try {
    const snapshot = await get(query(ref(db, `users/${userId}/orderList`), orderByChild('orderDate')));

    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        orderList.push({ ...child.val(), key: child.key });
      });
    }

    return orderList.reverse();
  } catch (error) {
    console.error('Error fetching user order list:', error);
    return [];
  }
};

const useUserOrderListQuery = (userId: string): UseQueryResult<Array<IUserOrderListItemRes>, Error> =>
  useQuery({ queryKey: ['userOrderList', userId], queryFn: () => userOrderListApi(userId) });

export default useUserOrderListQuery;
