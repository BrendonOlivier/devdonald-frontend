import axios from 'axios';

// Criando a conexão com o Back-End
export const api = axios.create({
    baseURL: 'http://localhost:3001',
});

// Trazendo todas as requisições da nossa API (BackEnd)
api.interceptors.request.use(async config => {
    // O nosso token está gravado no LocalStorage, então vamos pega-lo
    const userData = await localStorage.getItem('devdonald:userData')
    const token = userData && JSON.parse(userData).token     // Separando só o token...
    config.headers.authorization = `Bearer ${token}`

    // E retorno nosso TOKEN
    return config
})