import React from 'react';
import { UserInfoBox, UserRankInfo, UserDashboard } from './styles';
import { Link } from 'react-router-dom';
import { useUserNickname } from 'store';
import { checkRank } from './utils/rank';
import LogoutBtn from './LogoutBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faHeart } from '@fortawesome/free-regular-svg-icons';

export default function UserInfo({ orderCount, isLoading }: { orderCount: number; isLoading: boolean }) {
  const nickname = useUserNickname();
  const { rank, medal } = checkRank(orderCount);

  return (
    <UserInfoBox>
      <UserRankInfo>
        <span className="medal">{medal}</span>
        <p>
          <span className="rank">{isLoading ? '_' : rank}, </span>
          <span className="nickname"> {nickname} 💕</span>
        </p>
      </UserRankInfo>
      <UserDashboard>
        <Link to="/orderHistory">
          <FontAwesomeIcon icon={faFileLines} />
          <span>주문내역</span>
        </Link>
        <Link to="/likes">
          <FontAwesomeIcon icon={faHeart} />
          <span>나의 찜</span>
        </Link>
        <LogoutBtn />
      </UserDashboard>
      <div className="countInfo">
        이번 달 나의 주문 횟수는 <span>{orderCount}건</span> 입니다.
      </div>
    </UserInfoBox>
  );
}
