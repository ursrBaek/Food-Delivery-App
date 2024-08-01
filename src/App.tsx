import React from 'react';
import { Reset } from 'styled-reset';

import Routes from 'routes';

import { Container } from 'components/common/styles';
import useAuthState from 'hooks/useAuthState';

function App() {
  useAuthState();

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
