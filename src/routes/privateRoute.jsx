import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/UserContext';

const PrivateRoute = ({ children }) => {
    const { userData } = useUser(); // Obtenha os dados do usuário do contexto  

    // Verifica se o usuário está autenticado  
    const isAuthenticated = userData && Object.keys(userData).length !== 0;

    // Se o usuário estiver autenticado, renderiza o componente filho  
    // Caso contrário, redireciona para a página de login  
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;  