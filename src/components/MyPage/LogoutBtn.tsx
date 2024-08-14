import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useOrderListAction, useRecentStoresActions, useUserActions, useUserId } from 'store';

function LogoutBtn() {
  const { setInitUser } = useUserActions();
  const { setOrderInit } = useOrderListAction();
  const { setInitRecentStores } = useRecentStoresActions();
  const userId = useUserId();
  const navigate = useNavigate();

  const logOut = async () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      localStorage.removeItem('recentStores-' + userId);

      alert('로그아웃 되었습니다.');
      await setInitUser();
      await signOut(auth);
      await setOrderInit();
      await setInitRecentStores();
      navigate('/');
    }
  };

  return (
    <button onClick={logOut}>
      <i className="fa-solid fa-arrow-right-from-bracket"></i>
      <span>로그아웃</span>
    </button>
  );
}

export default LogoutBtn;
