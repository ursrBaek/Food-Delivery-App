import React from 'react';
import { Reset } from 'styled-reset';

import { Route, Routes } from 'react-router-dom';

import Main from 'components/Main';
import StoreList from 'components/StoreList';
import MyPage from 'components/MyPage';
import Bill from 'components/Bill';
import StoreDetail from 'components/StoreDetail';
import Order from 'components/Order';
import Review from 'components/Review';
import Login from 'components/Login';
import SignUp from 'components/SignUp';

function App() {
  return (
    <div className="App">
      <Reset />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/likes" element={<StoreList />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/store/:category" element={<StoreList />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/store/detail/:storeId" element={<StoreDetail />} />
        <Route path="/order/:storeId" element={<Order />} />
        <Route path="/review/:storeId" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
