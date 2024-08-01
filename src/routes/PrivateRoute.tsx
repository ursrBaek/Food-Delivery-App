import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useIsLogin } from 'store';

const PrivateRoute = () => {
  const isLogin = useIsLogin();

  if (!isLogin) {
    alert('로그인 페이지로 이동합니다.');
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
