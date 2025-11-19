import { getContext, setContext } from 'svelte';
import type { Theme, ThemeName } from './types';

export const THEME_CONTEXT_KEY = 'theme-context';

export interface ThemeContext {
  theme: Theme;
  setTheme: (themeName: ThemeName) => void;
  currentTheme: ThemeName;
}

// Устанавливаем контекст темы
export function setThemeContext(theme: Theme, setThemeFn: (themeName: ThemeName) => void, currentThemeName: ThemeName) {
  const context: ThemeContext = {
    theme,
    setTheme: setThemeFn,
    currentTheme: currentThemeName
  };

  setContext(THEME_CONTEXT_KEY, context);
  return context;
}

// Получаем контекст темы
export function getThemeContext(): ThemeContext {
  const context = getContext<ThemeContext>(THEME_CONTEXT_KEY);
  if (!context) {
    throw new Error('ThemeContext not found. Make sure to wrap your component with ThemeProvider.');
  }
  return context;
}