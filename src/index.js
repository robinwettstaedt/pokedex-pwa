import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { AuthProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';
import { ThemeChangeProvider } from './contexts/ThemeChangeContext';
import { SearchProvider } from './contexts/SearchContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeChangeProvider>
        <SearchProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </SearchProvider>
      </ThemeChangeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
