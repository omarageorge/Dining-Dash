import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type ProtectedRouteProps = {
  component: React.ComponentType<any>;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
}) => {
  const isAuthenticated = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Component /> : null;
};

export default ProtectedRoute;
