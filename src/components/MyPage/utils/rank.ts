export const rankObj = {
  0: {
    rank: '반가운분',
    medal: '🏅',
  },
  1: {
    rank: '고마운분',
    medal: '🥉',
  },
  2: {
    rank: '소중한분',
    medal: '🥈',
  },
  3: {
    rank: '귀하신분',
    medal: '🥇',
  },
  4: {
    rank: '천생연분',
    medal: '🏆',
  },
};

export const checkRank = (count: number): { rank: string; medal: string } => {
  if (count >= 20) {
    return rankObj[4];
  }
  if (count >= 10) {
    return rankObj[3];
  }
  if (count >= 6) {
    return rankObj[2];
  }
  if (count >= 1) {
    return rankObj[1];
  }
  return rankObj[0];
};

export const nextRankInfo = (count: number): string => {
  if (count >= 20) {
    return '항상 감사합니다. 고객님은 우리와 천생연분!';
  }
  if (count >= 10) {
    return `이달 내에 ${20 - count}회 더 주문하면 등급 UP!`;
  }
  if (count >= 6) {
    return `이달 내에 ${10 - count}회 더 주문하면 등급 UP!`;
  }
  if (count >= 1) {
    return `이달 내에 ${6 - count}회 더 주문하면 등급 UP!`;
  }
  return '음식 주문으로 등급을 올려보세요!';
};
