import { createBrowserRouter, Navigate  } from 'react-router-dom';
import { Home, Login, Register, Products, Cart, Admin } from '../containers';
import PrivateRoute from './privateRoute';
import paths from '../constants/path';

import Orders from '../containers/Admin/Orders';  
import ListProducts from '../containers/Admin/ListProducts';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" />, // Redireciona para a página de login
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/cadastro',
        element: <Register />
    },
    {
        path: "/home",
        element: (
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        ),
    },
    {
        path: "/produtos",
        element: (
            <PrivateRoute>
                <Products />
            </PrivateRoute>
        ),
    },
    {
        path: "/carrinho",
        element: (
            <PrivateRoute>
                <Cart />
            </PrivateRoute>
        ),
    },
    {
        path: paths.Order,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        ),
    },
    {
        path: paths.Products,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        ),
    },
]);