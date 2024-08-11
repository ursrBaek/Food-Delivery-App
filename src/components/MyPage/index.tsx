import Header from 'components/common/Header';
import PrevButton from 'components/common/PrevButton';
import React from 'react';
import UserInfo from './UserInfo';
import { MyPageContainer } from './styles';
import { useUserActions, useUserId } from 'store';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
  const { setInitUser } = useUserActions();
  const navigate = useNavigate();
  const userId = useUserId();

  const logOut = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      setInitUser();
      signOut(auth);
      localStorage.removeItem('recentStores-' + userId);
      navigate('/login');
    }
  };
  return (
    <>
      <Header>마이페이지</Header>
      <PrevButton isAbsolutePosition={true} />
      <MyPageContainer>
        <p className="speaker">
          <i className="fa-solid fa-bullhorn"></i> 2번 더 주문하면 다음 달 등급 UP!
        </p>
        <UserInfo />
        <div className="rule">
          <p>[ 등급규칙 ]</p>
          <p>
            <span>🥉</span> 고마운분: 월 0회 ~ 4회 주문
          </p>
          <p>
            <span>🥈</span> 귀 한 분: 월 5회 이상 주문
          </p>
          <p>
            <span>🥇</span> 더귀한분: 월 10회 이상 주문
          </p>
          <p>
            <span>🏆</span> 천생연분: 월 20회 이상 주문
          </p>
        </div>
        <button className="logout" onClick={logOut}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i> 로그아웃
        </button>
      </MyPageContainer>
    </>
  );
}
