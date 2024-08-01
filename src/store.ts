import { IUserStore } from 'types/storeTypes';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useUserStore = create<IUserStore>()(
  devtools((set) => ({
    isLogin: false,
    id: '',
    nickname: '',
    actions: {
      setId: (id: string) => set(() => ({ id })),
      setNickname: (nickname: string) => set(() => ({ nickname })),
      setIsLogin: (isLogin: boolean) => set(() => ({ isLogin })),
      setInitUser: () => set(() => ({ isLogin: false, id: '', nickname: '' })),
    },
  })),
);

export const useUserId = () => useUserStore((state) => state.id);
export const useUserNickname = () => useUserStore((state) => state.nickname);
export const useIsLogin = () => useUserStore((state) => state.isLogin);
export const useUserActions = () => useUserStore((state) => state.actions);
