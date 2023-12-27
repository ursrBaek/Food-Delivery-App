import React, { useCallback, useState } from 'react';
import { ReviewWrapper } from './styles';

function Index() {
  const [star, setStar] = useState('1');
  const [content, setContent] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onClickStar = useCallback((e: React.MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLLIElement) {
      setStar(e.target.id);
    }
  }, []);

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
      <textarea
        placeholder="100자 이내의 리뷰를 작성해주세요."
        maxLength={100}
        onChange={onChange}
        value={content}
      ></textarea>
      <p className="number-of-letters">
        <span className="input-letters">{content.length <= 100 ? content.length : 100}</span> /{' '}
        <span className="max-letters">100자</span>
      </p>
      <div className="wrap-btn">
        <button disabled>리뷰 등록</button>
      </div>
    </ReviewWrapper>
  );
}

export default Index;
