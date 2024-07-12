import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

function AppRoutes() {
  const routes = useRoutes([
    {
      path: '/portafolio/',
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
