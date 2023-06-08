import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/home-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantPage from './pages/restaurant-page';
import ErrorPage from './pages/error-page';
import './styles/globals.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'restaurant/:restaurantId',
    element: <RestaurantPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
