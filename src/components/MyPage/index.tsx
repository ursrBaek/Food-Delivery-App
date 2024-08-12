import Header from 'components/common/Header';
import PrevButton from 'components/common/PrevButton';
import React from 'react';
import UserInfo from './UserInfo';
import { MyPageContainer } from './styles';
import { useUserId } from 'store';
import useUserOrderListQuery from 'components/OrderHistory/hooks/useUserOrderListQuery';
import RankRule from './RankRule';
import calculateOrderCountInThisMonth from './utils/calculateOrderCountInThisMonth';
import { nextRankInfo } from './utils/rank';

export default function MyPage() {
  const userId = useUserId();

  const { isLoading, data: orderHistoryList } = useUserOrderListQuery(userId);

  let orderCount = 0;
  if (orderHistoryList) {
    orderCount = calculateOrderCountInThisMonth(orderHistoryList);
  }

  return (
    <>
      <Header>마이페이지</Header>
      <PrevButton isAbsolutePosition={true} />
      <MyPageContainer>
        <p className="speaker">
          <i className="fa-solid fa-bullhorn"></i> {!isLoading && nextRankInfo(orderCount)}
        </p>
        <UserInfo orderCount={orderCount} />
        <RankRule />
      </MyPageContainer>
    </>
  );
}
