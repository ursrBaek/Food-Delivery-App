import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useUserActions, useUserId } from 'store';

function LogoutBtn() {
  const { setInitUser } = useUserActions();
  const userId = useUserId();
  const navigate = useNavigate();

  const logOut = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      setInitUser();
      signOut(auth);
      localStorage.removeItem('recentStores-' + userId);
      navigate('/login');
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
