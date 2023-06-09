import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import RestaurantPage from '../pages/restaurant-page';
import ErrorPage from '../pages/error-page';
import AdminRoot from '../pages/Admin';
import HomePage from '../pages/home-page';
import RestaurantsList from '../pages/Admin/restaurants-list';
import RestaurantAddForm from '../pages/Admin/restaurant-add-form';
import RestaurantEditForm from '../pages/Admin/restaurant-edit-form';
import RestaurantMenu from '../pages/Admin/restaurant-menu';
import RestaurantAddDish from '../pages/Admin/restaurant-add-dish';
import LoginPage from '../pages/login-page';
import SignUpPage from '../pages/signup-page';

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
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'signup',
    element: <SignUpPage />,
  },
  {
    path: '/admin',
    element: <ProtectedRoute component={AdminRoot} />,
    children: [
      {
        path: '',
        element: <RestaurantsList />,
      },
      {
        path: 'restaurants',
        element: <RestaurantsList />,
      },
      {
        path: 'restaurants/menu',
        element: <RestaurantMenu />,
      },
      {
        path: 'restaurants/menu/add',
        element: <RestaurantAddDish />,
      },
      {
        path: 'restaurants/add',
        element: <RestaurantAddForm />,
      },
      {
        path: 'restaurants/edit',
        element: <RestaurantEditForm />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
