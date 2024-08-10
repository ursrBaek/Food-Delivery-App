import { IOrderStore, IUserStore } from 'types/storeTypes';
import { auth } from './firebase';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { IOrderItem, IUserOrderListItemRes } from 'types/responseTypes';

// user 정보 스토어

const useUserStore = create<IUserStore>()(
  devtools((set) => ({
    loading: !auth.currentUser,
    id: auth.currentUser?.uid || '',
    nickname: auth.currentUser?.displayName || '',
    actions: {
      setLoading: (loading: boolean) => set({ loading }),
      setId: (id: string) => set(() => ({ id })),
      setNickname: (nickname: string) => set(() => ({ nickname })),
      setInitUser: () => set(() => ({ isLogin: false, id: '', nickname: '' })),
    },
  })),
);

export const useLoading = () => useUserStore((state) => state.loading);
export const useUserId = () => useUserStore((state) => state.id);
export const useUserNickname = () => useUserStore((state) => state.nickname);
export const useUserActions = () => useUserStore((state) => state.actions);

// 주문 정보 스토어

const useOrderStore = create<IOrderStore>()(
  devtools(
    immer((set) => ({
      storeName: '',
      storeId: '',
      orderList: [],
      deliveryTip: 0,
      storeImg: '',
      minPrice: 0,
      totalAmount: 0,
      orderDate: '',
      actions: {
        // 액션함수 하나로 묶기!!!!!!!!!!!
        setOrderInit: () =>
          set({ storeName: '', storeId: '', orderList: [], deliveryTip: 0, storeImg: '', minPrice: 0, totalAmount: 0, orderDate: '' }),
        setOrderDate: (date: string) => set((state) => ({ orderDate: date })),
        setStoreName: (storeName: string) => set((state) => ({ storeName })),
        setDeliveryTip: (deliveryTip: number) => set((state) => ({ deliveryTip })),
        setStoreImg: (storeImg: string) => set((state) => ({ storeImg })),
        setMinPrice: (minPrice: number) => set((state) => ({ minPrice })),
        setStoreId: (paramsStoreId) =>
          set((state) => {
            if (state.storeId && state.storeId !== paramsStoreId) {
              return { storeId: paramsStoreId, orderList: [], totalAmount: 0 };
            } else if (!state.storeId) {
              return { storeId: paramsStoreId };
            }
            return state;
          }),
        setOrderSameMenu: (orderInfo: IUserOrderListItemRes) =>
          set((state) => ({
            storeName: orderInfo.storeName,
            storeId: orderInfo.storeId,
            orderList: orderInfo.orderList,
            deliveryTip: orderInfo.deliveryTip,
            storeImg: orderInfo.storeImg,
            minPrice: orderInfo.minPrice,
            totalAmount: orderInfo.totalAmount,
            orderDate: '',
          })),
        addMenu: (idx, menu) => {
          return set((state) => {
            state.orderList[idx] = menu;
            state.totalAmount = calculateTotalAmount(state.orderList as IOrderItem[], state.deliveryTip);
          });
        },
        deleteMenu: (idx) => {
          return set((state) => {
            state.orderList[idx] = null;
            state.totalAmount = calculateTotalAmount(state.orderList as IOrderItem[], state.deliveryTip);
          });
        },
        increaseMenuCount: (idx) =>
          set((state) => {
            const orderItem = state.orderList[idx] as IOrderItem;
            orderItem.orderCount += 1;
            state.totalAmount = calculateTotalAmount(state.orderList as IOrderItem[], state.deliveryTip);
          }),
        decreaseMenuCount: (idx) =>
          set((state) => {
            const orderItem = state.orderList[idx] as IOrderItem;
            orderItem.orderCount -= 1;
            state.totalAmount = calculateTotalAmount(state.orderList as IOrderItem[], state.deliveryTip);
          }),
      },
    })),
  ),
);

function calculateTotalAmount(orderList: (IOrderItem | null)[], deliveryTip: number) {
  return (
    deliveryTip +
    orderList.filter((menu): menu is IOrderItem => menu !== null).reduce((curr, menu) => curr + menu.foodPrice * menu.orderCount, 0)
  );
}

export const useStoreName = () => useOrderStore((state) => state.storeName);
export const useStoreId = () => useOrderStore((state) => state.storeId);
export const useTotalAmount = () => useOrderStore((state) => state.totalAmount);
export const useDeliveryTip = () => useOrderStore((state) => state.deliveryTip);
export const useOrderList = () => useOrderStore((state) => state.orderList);
export const useOrderDate = () => useOrderStore((state) => state.orderDate);
export const useOrderInfo = () =>
  useOrderStore((state) => ({
    storeName: state.storeName,
    storeId: state.storeId,
    storeImg: state.storeImg,
    minPrice: state.minPrice,
    deliveryTip: state.deliveryTip,
    orderList: state.orderList,
    totalAmount: state.totalAmount,
    orderDate: state.orderDate,
  }));

export const useOrderListAction = () => useOrderStore((state) => state.actions);
