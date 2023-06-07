import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/home-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/styles/globals.scss';
import RestaurantPage from './pages/restaurant-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/restaurant',
    element: <RestaurantPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
