import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';

function AppRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/*',
      element: <NotFound />
    }
  ]);

  return routes;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
