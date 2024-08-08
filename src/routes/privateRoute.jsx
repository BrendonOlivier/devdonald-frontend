import React from 'react';
import { Navigate } from 'react-router-dom';
import { Header } from '../components';
import {Footer} from '../components'

const PrivateRoute = ({ children, isAdmin }) => {
  const user = localStorage.getItem('devdonald:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  // Se a tela for de administrador, e o usuário não for admin e tentar acessar a rota, vou redirecionar ele para HOME
  if(isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/home" />
  }

  return (
    <>
      {!isAdmin && <Header />}
      {children}
      {!isAdmin && <Footer />}
    </>
  )
};

export default PrivateRoute;  