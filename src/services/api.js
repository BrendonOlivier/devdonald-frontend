import axios from 'axios';

// Criando a conexão com o Back-End
export const api = axios.create({
    baseURL: 'http://localhost:3001',
    
})