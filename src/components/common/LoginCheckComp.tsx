import AuthTemplate from 'components/AuthTemplate';
import { auth } from '../../firebase';
import React from 'react';
import { Message } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

function LoginCheckComp({ children }: Props) {
  const isLogin = auth.currentUser;

  if (isLogin) {
    return children;
  } else {
    return (
      <AuthTemplate>
        <Message>
          로그인이 필요합니다.
          <br />
          <Link to="/login">로그인 하러 가기</Link>
        </Message>
      </AuthTemplate>
    );
  }
}

export default LoginCheckComp;
