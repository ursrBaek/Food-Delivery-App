import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useUserActions } from 'store';

function useAuthState() {
  const { setLoading, setId, setNickname } = useUserActions();

  onAuthStateChanged(auth, (authUser) => {
    if (authUser && authUser.displayName) {
      setId(authUser.uid);
      setNickname(authUser.displayName);
      setLoading(false);
    } else {
      setId('');
      setNickname('');
      setLoading(false);
    }
  });
}

export default useAuthState;
