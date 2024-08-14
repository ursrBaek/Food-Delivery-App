import { IOrderStore, IRecentStores, IUserStore } from 'types/storeTypes';
import { auth } from './firebase';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { IOrderItem } from 'types/responseTypes';

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
        setCurrentStoreInfo: (storeId, storeName, deliveryTip, minPrice, storeImg) => {
          set((state) => {
            if (state.storeId && state.storeId !== storeId) {
              return { storeId, storeName, deliveryTip, minPrice, storeImg, orderList: [], totalAmount: 0 };
            } else if (!state.storeId) {
              return { storeId, storeName, deliveryTip, minPrice, storeImg };
            } else return state;
          });
        },
        setOrderInit: () =>
          set({ storeName: '', storeId: '', orderList: [], deliveryTip: 0, storeImg: '', minPrice: 0, totalAmount: 0, orderDate: '' }),
        setOrderDate: (date: string) => set({ orderDate: date }),
        setOrderSameMenu: (orderInfo) =>
          set({
            storeName: orderInfo.storeName,
            storeId: orderInfo.storeId,
            orderList: orderInfo.orderList,
            deliveryTip: orderInfo.deliveryTip,
            storeImg: orderInfo.storeImg,
            minPrice: orderInfo.minPrice,
            totalAmount: orderInfo.totalAmount,
            orderDate: '',
          }),
        addMenu: (idx, menu) => {
          set((state) => {
            state.orderList[idx] = menu;
            state.totalAmount = calculateTotalAmount(state.orderList, state.deliveryTip);
          });
        },
        deleteMenu: (idx) => {
          set((state) => {
            state.orderList[idx] = null;
            state.totalAmount = calculateTotalAmount(state.orderList, state.deliveryTip);
          });
        },
        increaseMenuCount: (idx) =>
          set((state) => {
            const orderItem = state.orderList[idx];
            if (orderItem) {
              orderItem.orderCount += 1;
            }
            state.totalAmount = calculateTotalAmount(state.orderList, state.deliveryTip);
          }),
        decreaseMenuCount: (idx) =>
          set((state) => {
            const orderItem = state.orderList[idx];
            if (orderItem) {
              orderItem.orderCount -= 1;
            }
            state.totalAmount = calculateTotalAmount(state.orderList, state.deliveryTip);
          }),
      },
    })),
  ),
);

function calculateTotalAmount(orderList: (IOrderItem | null)[], deliveryTip: number): number {
  return (
    deliveryTip +
    orderList.filter((menu): menu is IOrderItem => menu !== null).reduce((curr, menu) => curr + menu.foodPrice * menu.orderCount, 0)
  );
}

export const useStoreName = () => useOrderStore((state) => state.storeName);
export const useOrderList = () => useOrderStore((state) => state.orderList);
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

// 로컬스토리지의 최근 조회 가게
const useRecentStoresStore = create<IRecentStores>()(
  devtools(
    immer((set) => ({
      loading: false,
      recentStores: [],
      actions: {
        setRecentStoreLoading: (bool) => {
          set({ loading: bool });
        },
        setRecentStore: (stores) => {
          set({ recentStores: stores });
        },
        setInitRecentStores: () => {
          set({ recentStores: [] });
        },
      },
    })),
  ),
);

export const useRecentStoresLoading = () => useRecentStoresStore((state) => state.loading);
export const useRecentStores = () => useRecentStoresStore((state) => state.recentStores);
export const useRecentStoresActions = () => useRecentStoresStore((state) => state.actions);
