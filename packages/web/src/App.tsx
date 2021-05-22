import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/themes/light';
import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <GlobalStyles />
      <Routes />  
    </ThemeProvider>
  );
}

export default App;
