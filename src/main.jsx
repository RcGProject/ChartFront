import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import App from './App';
import CustomRouter from './routes/CustomerRouter';
import history from './services/history';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CustomRouter history={history}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </CustomRouter>,
);
