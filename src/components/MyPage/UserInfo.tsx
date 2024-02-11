import React from 'react';
import { UserInfoBox, UserRankInfo, UserDashboard } from './styles';
import { Link } from 'react-router-dom';

export default function UserInfo() {
  return (
    <UserInfoBox>
      <UserRankInfo>
        <span className="medal">🥉</span>
        <p>
          <span className="rank">고마운분, </span>
          <span className="nickname"> 깜상💕</span>
        </p>
      </UserRankInfo>
      <UserDashboard>
        <Link to="/">
          <i className="fa-regular fa-file-lines"></i>
          {/* <i className="fa-solid fa-file-lines"></i> */}
          <span>주문내역</span>
        </Link>
        <Link to="/">
          <i className="fa-regular fa-heart"></i>
          <span>나의 찜</span>
        </Link>
        <Link to="/">
          <i className="fa-regular fa-comment-dots"></i>
          {/* <i className="fa-solid fa-comment-dots"></i> */}
          <span>리뷰관리</span>
        </Link>
      </UserDashboard>
      <div className="countInfo">
        이번 달 나의 주문 횟수는 <span>4건</span> 입니다.
      </div>
    </UserInfoBox>
  );
}
