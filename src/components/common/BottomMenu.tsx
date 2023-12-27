import React from 'react';
import { MenuWrapper } from './styles';
import { Link } from 'react-router-dom';

function BottomMenu() {
  return (
    <MenuWrapper>
      <ul>
        <li>
          <Link to="/">
            <i className="icon fa-solid fa-house" />
            <span>홈</span>
          </Link>
        </li>
        <li>
          <Link to="/find">
            <i className="icon fa-solid fa-magnifying-glass"></i>
            <span>검색</span>
          </Link>
        </li>
        <li>
          <Link to="/likes">
            <i className="icon fa-regular fa-heart"></i>
            <span>찜한가게</span>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <i className="icon fa-solid fa-file-invoice"></i>
            <span>주문내역</span>
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <i className="icon fa-solid fa-user" />
            <span>MY</span>
          </Link>
        </li>
      </ul>
    </MenuWrapper>
  );
}

export default BottomMenu;
