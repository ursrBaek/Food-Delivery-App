import AuthTemplate from 'components/AuthTemplate';
import { Message } from 'components/common/styles';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLoading, useUserNickname } from 'store';

const PrivateRoute = () => {
  const loading = useLoading();
  const userNickname = useUserNickname();

  if (loading) {
    return (
      <AuthTemplate>
        <Message>Loading...</Message>
      </AuthTemplate>
    );
  }

  if (!userNickname) {
    alert('로그인 회원 전용 페이지입니다.\n로그인 페이지로 이동합니다.');
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
