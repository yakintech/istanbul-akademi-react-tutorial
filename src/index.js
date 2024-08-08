import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import './style.css'
import { SnackbarProvider } from 'notistack';
import { FavoritesProvider } from './context/FavoritesContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CounterProvider } from './context/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));


export const queryClient = new QueryClient()

root.render(

  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <CounterProvider>
        <FavoritesProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </FavoritesProvider>
      </CounterProvider>
    </BrowserRouter>
  </QueryClientProvider>



);



