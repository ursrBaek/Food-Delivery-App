export interface IUserStore {
  isLogin: boolean;
  id: string;
  nickname: string;
  actions: {
    setId: (id: string) => void;
    setNickname: (nickname: string) => void;
    setIsLogin: (login: boolean) => void;
    setInitUser: () => void;
  };
}
