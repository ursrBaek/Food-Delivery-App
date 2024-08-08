import React from 'react';
import { MessageComp, StyledOrderButton } from './styles';
import { useOrderInfo, useOrderListAction, useUserId } from 'store';
import { useNavigate } from 'react-router-dom';
import useStoreDetailQuery from 'components/StoreDetail/hooks/useStoreDetailQuery';
import { StoreDetailInfo } from 'types/responseTypes';
import { serverTimestamp } from 'firebase/database';
import useOrderMutation, { IOrderInfo } from './hooks/useOrderMutation';
import getCurrentDate from 'utils/getCurrentDate';

function OrderButton() {
  const navigate = useNavigate();

  const userId = useUserId();
  const { setOrderDate } = useOrderListAction();
  const { storeName, storeId, orderList, totalAmount } = useOrderInfo();
  const { data: storeDetailInfo } = useStoreDetailQuery(storeId);
  const { minPrice } = storeDetailInfo as StoreDetailInfo;
  const { mutateAsync, isPending, isError, error } = useOrderMutation();

  const order = async (orderInfo: IOrderInfo) => {
    const res = await mutateAsync(orderInfo);
    if (res?.orderDate) {
      const date = getCurrentDate(res.orderDate);
      setOrderDate(date);
    }
  };

  const clickOrderButton = () => {
    const orderInfo = {
      userId,
      orderDetail: {
        storeName,
        totalAmount,
        orderList,
        storeId,
        orderDate: serverTimestamp(),
        review: false,
      },
    };

    if (totalAmount >= minPrice) {
      order(orderInfo).then(() => {
        navigate('/bill');
      });
    } else {
      alert(`최소 주문금액은 ${minPrice.toLocaleString()}원 입니다.`);
    }
  };

  return (
    <>
      <StyledOrderButton onClick={clickOrderButton} disabled={isPending}>
        <i className="fa-solid fa-utensils"></i> <span className="order-price">{totalAmount.toLocaleString()} 원 </span> 배달 주문하기
      </StyledOrderButton>
      {isPending && (
        <MessageComp>
          <span>주문 중</span>
          <p>잠시만 기다려주세요.</p>
        </MessageComp>
      )}
      {isError && (
        <MessageComp>
          <p>문제가 발생했습니다.</p>
          <p>{(error as Error) && error.message}</p>
        </MessageComp>
      )}
    </>
  );
}

export default OrderButton;
