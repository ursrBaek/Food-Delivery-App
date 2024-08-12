import React from 'react';

function RankRule() {
  return (
    <div className="rule">
      <p>[ 등급규칙 ]</p>
      <p>
        <span>🏅</span> 반가운분: 미주문
      </p>
      <p>
        <span>🥉</span> 고마운분: 월 1회 ~ 5회 주문
      </p>
      <p>
        <span>🥈</span> 소중한분: 월 6회 이상 주문
      </p>
      <p>
        <span>🥇</span> 귀하신분: 월 10회 이상 주문
      </p>
      <p>
        <span>🏆</span> 천생연분: 월 20회 이상 주문
      </p>
    </div>
  );
}

export default RankRule;
