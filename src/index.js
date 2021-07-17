import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { AuthProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';
import { ThemeChangeProvider } from './contexts/ThemeChangeContext';
import { SearchProvider } from './contexts/SearchContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <>
    <AuthProvider>
      <ThemeChangeProvider>
        <SearchProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </SearchProvider>
      </ThemeChangeProvider>
    </AuthProvider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.register();
