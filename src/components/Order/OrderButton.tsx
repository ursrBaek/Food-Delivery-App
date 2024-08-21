import React from 'react';
import { MessageComp, StyledOrderButton } from './styles';
import { useOrderInfo, useOrderListAction, useUserId } from 'store';
import { useNavigate } from 'react-router-dom';
import { serverTimestamp } from 'firebase/database';
import useOrderMutation, { IOrderInfo } from './hooks/useOrderMutation';
import getCurrentDate from 'utils/getCurrentDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function OrderButton() {
  const navigate = useNavigate();

  const userId = useUserId();
  const { setOrderDate } = useOrderListAction();
  const { storeName, storeId, orderList, totalAmount, deliveryTip, storeImg, minPrice } = useOrderInfo();
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
        deliveryTip,
        totalAmount,
        storeImg,
        orderList,
        storeId,
        minPrice,
        orderDate: serverTimestamp(),
        review: false,
      },
    };

    if (totalAmount - deliveryTip >= minPrice) {
      order(orderInfo).then(() => {
        navigate('/bill');
      });
    } else {
      alert(`최소 주문금액(배달팁 제외)은 ${minPrice.toLocaleString()}원 입니다.`);
    }
  };

  return (
    <>
      <StyledOrderButton onClick={clickOrderButton} disabled={isPending}>
        <FontAwesomeIcon icon={faUtensils} /> <span className="order-price">{totalAmount.toLocaleString()} 원 </span> 배달 주문하기
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
