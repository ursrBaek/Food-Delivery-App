import { lazy } from 'react';

import Home from 'components/Home';
const Bill = lazy(() => import('components/Bill'));
const Login = lazy(() => import('components/Login'));
const MyPage = lazy(() => import('components/MyPage'));
const Order = lazy(() => import('components/Order'));
const OrderHistory = lazy(() => import('components/OrderHistory'));
const OrderInfoDetail = lazy(() => import('components/OrderInfoDetail'));
const Search = lazy(() => import('components/Search'));
const SignUp = lazy(() => import('components/SignUp'));
const StoreDetail = lazy(() => import('components/StoreDetail'));
const StoreList = lazy(() => import('components/StoreList'));
const Review = lazy(() => import('components/Review'));

const publicRoutes = [
  { path: '/', component: <Home /> },
  { path: '/search', component: <Search /> },
  { path: '/store/:category', component: <StoreList /> },
  { path: '/store/detail/:storeId', component: <StoreDetail /> },
  { path: '/login', component: <Login /> },
  { path: '/signup', component: <SignUp /> },
  { path: '/mypage', component: <MyPage /> },
  { path: '/orderHistory', component: <OrderHistory /> },
  { path: '/likes', component: <StoreList /> },
];

const privateRoutes = [
  { path: '/bill', component: <Bill /> },
  { path: '/order/:storeId', component: <Order /> },
  { path: '/orderDetail/:orderId', component: <OrderInfoDetail /> },
  { path: '/review/:orderId', component: <Review /> },
];

export { publicRoutes, privateRoutes };
