import React, { useCallback, useState } from 'react';
import { ReviewWrapper } from './styles';
import PrevButton from 'components/common/PrevButton';
import { useOrderInfo, useOrderListAction, useUserId, useUserNickname } from 'store';
import { serverTimestamp } from 'firebase/database';
import useReviewMutation, { IReviewInfo } from './hooks/useReviewMutation';
import { useNavigate, useParams } from 'react-router-dom';

function Index() {
  const navigate = useNavigate();

  const { orderId } = useParams();
  const userId = useUserId();
  const { storeId } = useOrderInfo();
  const nickname = useUserNickname();
  const { setOrderInit } = useOrderListAction();

  const [star, setStar] = useState('1');
  const [content, setContent] = useState('');

  const { mutateAsync, isPending, isError, error } = useReviewMutation();

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onClickStar = useCallback((e: React.MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLLIElement) {
      setStar(e.target.id);
    }
  }, []);

  const onClickReviewWriteBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const reviewInfo: IReviewInfo = {
      storeId,
      userId,
      key: orderId as string,
      review: {
        nickname,
        star: +star,
        content,
        date: serverTimestamp(),
      },
    };

    await mutateAsync(reviewInfo);

    alert('리뷰 등록이 완료되었습니다.');
    setOrderInit();
    navigate(`/store/detail/${storeId}`, { replace: true });
  };

  if (isError) {
    alert('리뷰 등록 중 오류가 발생했습니다.');
    console.log(error.message);
  }
  return (
    <ReviewWrapper>
      <p className="q-text">식사는 어떠셨나요?</p>
      <ul onClick={onClickStar}>
        <li id="1" className="full-star"></li>
        <li id="2" className={star >= '2' ? 'full-star' : 'empty-star'}></li>
        <li id="3" className={star >= '3' ? 'full-star' : 'empty-star'}></li>
        <li id="4" className={star >= '4' ? 'full-star' : 'empty-star'}></li>
        <li id="5" className={star === '5' ? 'full-star' : 'empty-star'}></li>
      </ul>
      <h1>리뷰 작성</h1>
      <textarea placeholder="100자 이내의 리뷰를 작성해주세요." maxLength={100} onChange={onChange} value={content}></textarea>
      <p className="number-of-letters">
        <span className="input-letters">{content.length <= 100 ? content.length : 100}</span> / <span className="max-letters">100자</span>
      </p>
      <div className="wrap-btn">
        <button disabled={isPending} onClick={onClickReviewWriteBtn}>
          리뷰 등록
        </button>
      </div>
      <PrevButton isAbsolutePosition={true} />
    </ReviewWrapper>
  );
}

export default Index;
