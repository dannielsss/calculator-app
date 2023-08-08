import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './components/shared/GlobalStyles.tsx';
import ThemeProvider from './context/Theme/ThemeProvider.tsx';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
