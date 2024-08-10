import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { IOrderItem, IOrderListObj, IUserOrderListItemRes } from 'types/responseTypes';
import convertOrderListObjToArray from 'utils/convertOrderListObjToArray';
import { getDataFromDB } from 'utils/getDataFromDB';

export const getOrderDetailApi = async (userId: string, orderId: string): Promise<IUserOrderListItemRes<(IOrderItem | null)[]> | null> => {
  try {
    const orderInfo = await getDataFromDB<IUserOrderListItemRes<IOrderListObj>>(`users/${userId}/orderList/${orderId}`);

    if (orderInfo) {
      let result: IUserOrderListItemRes<(IOrderItem | null)[]> = { ...orderInfo, orderList: [] };

      const generatedArrayFromObj: (IOrderItem | null)[] = convertOrderListObjToArray(orderInfo.orderList);
      result.orderList = generatedArrayFromObj;
      return result;
    }

    return null;
  } catch (error) {
    console.error('Error fetching order details:', error);
    return null;
  }
};

const useOrderDetailQuery = (userId: string, orderId: string): UseQueryResult<IUserOrderListItemRes<(IOrderItem | null)[]>, Error> =>
  useQuery({
    queryKey: ['orderDetail', userId, orderId],
    queryFn: () => getOrderDetailApi(userId, orderId),
  });

export default useOrderDetailQuery;
