import React from 'react';
import { MenuWrapper } from './styles';
import { Link } from 'react-router-dom';

function BottomMenu() {
  return (
    <MenuWrapper>
      <ul>
        <li>
          <Link to="/">
            <span className="a11y-hidden">홈</span>
            <i className="icon fa-solid fa-house" />
          </Link>
        </li>
        <li>
          <Link to="/likes">
            <span className="a11y-hidden">찜한 가게</span>
            <i className="icon fa-solid fa-heart" />
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <span className="a11y-hidden">마이 페이지</span>
            <i className="icon fa-solid fa-user" />
          </Link>
        </li>
      </ul>
    </MenuWrapper>
  );
}

export default BottomMenu;
