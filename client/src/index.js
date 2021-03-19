import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"; // Route, Switch
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <MuiThemeProvider theme={theme} >
    <CssBaseline />
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// <MuiThemeProvider Theme={Theme} >
