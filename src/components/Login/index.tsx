import React from 'react';

import AuthTemplate from 'components/AuthTemplate';
import { AuthButton } from 'components/AuthTemplate/styles';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <AuthTemplate>
      <form>
        <fieldset>
          <legend>회원 로그인 폼</legend>
          <div className="input-box">
            <input type="email" autoComplete="off" placeholder="아이디" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="비밀번호" />
          </div>
          <AuthButton type="submit">로그인</AuthButton>
        </fieldset>
      </form>
      <div className="join">
        혹시, 처음이신가요? <Link to="/signup">회원가입</Link>
      </div>
      <div className="home">
        로그인 없이 <Link to="/">홈으로 이동</Link>
      </div>
    </AuthTemplate>
  );
}
