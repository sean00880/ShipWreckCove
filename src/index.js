import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/themeContext';
import App from './App';
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


