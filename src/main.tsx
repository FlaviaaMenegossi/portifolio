import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

// Fontes hospedadas no próprio site (sem depender do Google Fonts)
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';

import { App } from './App';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
