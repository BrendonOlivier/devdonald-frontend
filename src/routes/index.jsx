import { createBrowserRouter, Navigate  } from 'react-router-dom';
import { Home, Login, Register, Products, Cart } from '../containers';
import PrivateRoute from './privateRoute';

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
]);