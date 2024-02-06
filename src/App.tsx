import React from 'react';
import { Reset } from 'styled-reset';

import { Route, Routes } from 'react-router-dom';

import Home from 'components/Home';
import Search from 'components/Search';
import StoreList from 'components/StoreList';
import MyPage from 'components/MyPage';
import Bill from 'components/Bill';
import StoreDetail from 'components/StoreDetail';
import Order from 'components/Order';
import Review from 'components/Review';
import Login from 'components/Login';
import SignUp from 'components/SignUp';
import { Container } from 'components/common/styles';

function App() {
  return (
    <div className="App">
      <Reset />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
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
      </Container>
    </div>
  );
}

export default App;
