import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/globalStyles'
import { Login } from './containers/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme='dark' />
  </React.StrictMode>,
);
