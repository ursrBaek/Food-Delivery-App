import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

//import routes
import { publicRoutes, privateRoutes } from './routes';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        {publicRoutes.map(({ path, component }) => (
          <Route path={path} element={component} key={path} />
        ))}
        <Route element={<PrivateRoute />}>
          {privateRoutes.map(({ path, component }, idx) => (
            <Route path={path} element={component} key={idx} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
