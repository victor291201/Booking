import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { deepOrange } from '@mui/material/colors';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { DataContext, DataProvider } from './controllers/Context';

const theme = createTheme({
    palette: {
      primary: purple,
      secondary: deepOrange,
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ThemeProvider theme={theme}>
      <React.StrictMode>
        <DataProvider>
            <App />
        </DataProvider>
      </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
