import React from 'react';
import { MenuWrapper } from './styles';
import { Link, useLocation } from 'react-router-dom';

function BottomMenu() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  const isLikes = pathname === '/likes';
  const isMyPage = pathname === '/mypage';
  const isOrderHistory = pathname === '/orderHistory';

  return (
    <MenuWrapper>
      <ul>
        <li>
          <Link to="/">
            <i className={'icon fa-solid fa-house' + (isHome ? ' select' : '')} />
            <span>홈</span>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <i className="icon fa-solid fa-magnifying-glass"></i>
            <span>검색</span>
          </Link>
        </li>
        <li>
          <Link to="/likes">
            <i className={'icon fa-regular fa-heart' + (isLikes ? ' select' : '')}></i>
            <span>찜한가게</span>
          </Link>
        </li>
        <li>
          <Link to="/orderHistory">
            <i className={'icon fa-solid fa-file-invoice' + (isOrderHistory ? ' select' : '')}></i>
            <span>주문내역</span>
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <i className={'icon fa-solid fa-user' + (isMyPage ? ' select' : '')} />
            <span>MY</span>
          </Link>
        </li>
      </ul>
    </MenuWrapper>
  );
}

export default BottomMenu;
