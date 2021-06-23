import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';
import { ThemeChangeProvider } from './contexts/ThemeChangeContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeChangeProvider>
        <ModalProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ModalProvider>
      </ThemeChangeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
