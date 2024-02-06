import React from 'react';
import { Link } from 'react-router-dom';

export default function RecentStores() {
  return (
    <div>
      {/* 세션스토리지에서 가져와서 뿌리기... */}
      <h2>최근 본 가게</h2>
      <ul>
        <li>
          <Link to="/store/detail/1">
            <img src={require(`../../assets/images/stores/족발야시장로고.jpg`)} alt="곽만근갈비탕" />
            <div className="info">
              <p className="storeName">곽만근갈비탕</p>
              <p className="category">한식</p>
            </div>
            <i
              className="fa-solid fa-xmark"
              onClick={(e) => {
                e.preventDefault();
              }}
            ></i>
          </Link>
        </li>
        <li>
          <Link to="/store/detail/1">
            <img src={require(`../../assets/images/stores/59쌀피자로고.jpg`)} alt="곽만근갈비탕" />
            <div className="info">
              <p className="storeName">59쌀피자</p>
              <p className="category">패스트푸드</p>
            </div>
            <i
              className="fa-solid fa-xmark"
              onClick={(e) => {
                e.preventDefault();
              }}
            ></i>
          </Link>
        </li>
        <li>
          <Link to="/store/detail/1">
            <img src={require(`../../assets/images/stores/두끼로고.jpg`)} alt="곽만근갈비탕" />
            <div className="info">
              <p className="storeName">곽만근갈비탕</p>
              <p className="category">한식</p>
            </div>
            <i
              className="fa-solid fa-xmark"
              onClick={(e) => {
                e.preventDefault();
              }}
            ></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
