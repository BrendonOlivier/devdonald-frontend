import { createBrowserRouter, Navigate  } from 'react-router-dom';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Home } from '../containers/Home';
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
]);