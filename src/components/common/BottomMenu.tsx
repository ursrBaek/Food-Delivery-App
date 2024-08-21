import React from 'react';
import { MenuWrapper } from './styles';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function BottomMenu() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  const isLikes = pathname === '/likes';
  const isMyPage = pathname === '/mypage';
  const isOrderHistory = pathname === '/orderHistory';

  return (
    <MenuWrapper>
      <ul>
        <li className={isHome ? ' select' : ''}>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
            <span>홈</span>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span>검색</span>
          </Link>
        </li>
        <li className={isLikes ? ' select' : ''}>
          <Link to="/likes">
            <FontAwesomeIcon icon={faHeart} />
            <span>찜한가게</span>
          </Link>
        </li>
        <li className={isOrderHistory ? ' select' : ''}>
          <Link to="/orderHistory">
            <FontAwesomeIcon icon={faFileInvoice} />
            <span>주문내역</span>
          </Link>
        </li>
        <li className={isMyPage ? ' select' : ''}>
          <Link to="/mypage">
            <FontAwesomeIcon icon={faUser} />
            <span>MY</span>
          </Link>
        </li>
      </ul>
    </MenuWrapper>
  );
}

export default React.memo(BottomMenu);
