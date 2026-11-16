import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Fontes hospedadas no próprio site (sem depender do Google Fonts)
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';

import { App } from './App';
import { GlobalStyle } from './styles/global';
import { ThemeModeProvider } from './styles/ThemeMode';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeModeProvider>
      <GlobalStyle />
      <App />
    </ThemeModeProvider>
  </StrictMode>,
);
