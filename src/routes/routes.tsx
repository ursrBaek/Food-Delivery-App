import Bill from 'components/Bill';
import Home from 'components/Home';
import Login from 'components/Login';
import MyPage from 'components/MyPage';
import Order from 'components/Order';
import OrderHistory from 'components/OrderHistory';
import OrderInfoDetail from 'components/OrderInfoDetail';
import Search from 'components/Search';
import SignUp from 'components/SignUp';
import StoreDetail from 'components/StoreDetail';
import StoreList from 'components/StoreList';
import Review from 'components/Review';

const publicRoutes = [
  { path: '/', component: <Home /> },
  { path: '/search', component: <Search /> },
  { path: '/store/:category', component: <StoreList /> },
  { path: '/store/detail/:storeId', component: <StoreDetail /> },
  { path: '/login', component: <Login /> },
  { path: '/signup', component: <SignUp /> },
];

const privateRoutes = [
  { path: '/orderHistory', component: <OrderHistory /> },
  { path: '/likes', component: <StoreList /> },
  { path: '/bill', component: <Bill /> },
  { path: '/order/:storeId', component: <Order /> },
  { path: '/orderDetail/:orderId', component: <OrderInfoDetail /> },
  { path: '/review/:orderId', component: <Review /> },
  { path: '/mypage', component: <MyPage /> },
];

export { publicRoutes, privateRoutes };
