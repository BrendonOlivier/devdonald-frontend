import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

import AppProvider from './hooks'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} theme='dark' />
    </AppProvider>
  </React.StrictMode>,
);
