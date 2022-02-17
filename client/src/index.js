import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContextProvider } from './contextApi/authContext/AuthContext';
import { MovieContextProvider } from './contextApi/movieContext/MovieContext';
import { ListContextProvider } from './contextApi/listContext/ListContext';
const theme = createTheme();
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
