import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Bars } from '../../pages/shared/LoaderSpiner';

export default function PrivateRoute({ children }) {
     const location = useLocation();
     const { user, loading } = useAuth;

     if (loading) {
          return <Bars />;
     }

     if (user && user.uid) {
          return children;
     }

     return <Navigate to="/auth/login" state={{ from: location }} replace />;
}
