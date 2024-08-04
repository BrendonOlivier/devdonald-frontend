import React from 'react';
import { Navigate } from 'react-router-dom';
import { Header } from '../components';

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('devdonald:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Header />
      {children}
    </>
  )
};

export default PrivateRoute;  