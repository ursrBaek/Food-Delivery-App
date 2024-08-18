import Header from 'components/common/Header';
import React from 'react';
import UserInfo from './UserInfo';
import { MyPageContainer } from './styles';
import { useUserId } from 'store';
import useUserOrderListQuery from 'components/OrderHistory/hooks/useUserOrderListQuery';
import RankRule from './RankRule';
import calculateOrderCountInThisMonth from './utils/calculateOrderCountInThisMonth';
import { nextRankInfo } from './utils/rank';
import BottomMenu from 'components/common/BottomMenu';
import LoginCheckComp from 'components/common/LoginCheckComp';

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
      <LoginCheckComp>
        <MyPageContainer>
          <p className="speaker">
            <i className="fa-solid fa-bullhorn"></i> {!isLoading && nextRankInfo(orderCount)}
          </p>
          <UserInfo isLoading={isLoading} orderCount={orderCount} />
          <RankRule />
        </MyPageContainer>
      </LoginCheckComp>
      <BottomMenu />
    </>
  );
}
