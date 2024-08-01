import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useUserActions } from 'store';

function useAuthState() {
  const { setId, setNickname, setIsLogin } = useUserActions();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser && authUser.displayName) {
        setId(authUser.uid);
        setNickname(authUser.displayName);
        setIsLogin(true);
      } else {
        setId('');
        setNickname('');
        setIsLogin(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setId, setNickname, setIsLogin]);
}

export default useAuthState;
