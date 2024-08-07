import { auth } from './firebase';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface IUserStore {
  loading: boolean;
  id: string;
  nickname: string;
  actions: {
    setLoading: (loading: boolean) => void;
    setId: (id: string) => void;
    setNickname: (nickname: string) => void;
    setInitUser: () => void;
  };
}

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
