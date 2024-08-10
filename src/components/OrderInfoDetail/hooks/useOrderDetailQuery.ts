import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { IUserOrderListItemRes } from 'types/responseTypes';
import { getDataFromDB } from 'utils/getDataFromDB';

export const getOrderDetailApi = async (userId: string, orderId: string) => {
  const data = await getDataFromDB(`users/${userId}/orderList/${orderId}`);
  return data;
};

const useOrderDetailQuery = (userId: string, orderId: string): UseQueryResult<IUserOrderListItemRes, Error> =>
  useQuery({
    queryKey: ['orderDetail', userId, orderId],
    queryFn: () => getOrderDetailApi(userId, orderId),
  });

export default useOrderDetailQuery;
