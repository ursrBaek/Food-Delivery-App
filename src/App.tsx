import React, { useEffect } from 'react';
import { Reset } from 'styled-reset';

import Routes from 'routes';

import { Container } from 'components/common/styles';
import useAuthState from 'hooks/useAuthState';
import { useRecentStoresActions, useUserId } from 'store';

function App() {
  const userId = useUserId();

  const { setRecentStore, setRecentStoreLoading } = useRecentStoresActions();
  setRecentStoreLoading(true);
  useAuthState();

  useEffect(() => {
    // 로컬스토리지 값 가져오기
    if (userId) {
      const recentStores = localStorage.getItem('recentStores-' + userId);
      console.log();
      if (recentStores) {
        setRecentStore(JSON.parse(recentStores));
      }
      setRecentStoreLoading(false);
    }
  }, [userId, setRecentStore, setRecentStoreLoading]);

  return (
    <div className="App">
      <Reset />
      <Container>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
