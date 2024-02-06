import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchResults() {
  const [searchText, setSearchText] = useState('닭발');

  return (
    <>
      <h2>
        '<span>{searchText}</span>' 검색 결과
      </h2>
      {/* <p className="infoMsg">일치하는 매장이 없습니다.</p> */}
      {/* <p className="infoMsg">검색중...</p> */}
      <ul>
        <li>
          <Link to="/store/detail/1">
            <img src={require(`../../assets/images/stores/족발야시장로고.jpg`)} alt="곽만근갈비탕" />
            <div className="info">
              <p className="storeName">곽만근갈비탕</p>
              <p className="category">한식</p>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}
