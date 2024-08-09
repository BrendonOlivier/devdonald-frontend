import { createBrowserRouter, Navigate  } from 'react-router-dom';
import { Home, Login, Register, Products, Cart, Admin } from '../containers';
import PrivateRoute from './privateRoute';
import paths from '../constants/path';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" />, // Redireciona para a página de login
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
    {
        path: paths.NewProduct,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        ),
    },
    {
        path: paths.NewCategory,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        ),
    },
    {
        path: paths.EditProduct,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        ),
    },
    {
        path: paths.EditCategory,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        ),
    },
]);