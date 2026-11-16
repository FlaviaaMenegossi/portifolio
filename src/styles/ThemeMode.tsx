import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, type ThemeMode } from './theme';

const STORAGE_KEY = 'tema';

type ThemeModeContextValue = {
  mode: ThemeMode;
  toggle: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

// Começa no escuro (a identidade do site); lembra a escolha da pessoa se ela trocar
const readSaved = (): ThemeMode => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(readSaved);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // sem armazenamento (aba anônima etc.): só não lembra a escolha
    }
  }, [mode]);

  const toggle = () => setMode((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeModeContext.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (!context) throw new Error('useThemeMode precisa estar dentro de <ThemeModeProvider>');
  return context;
}
