/**
 * Theme Context for Svelte
 * Provides theme access throughout the component tree
 */

import { getContext, setContext } from 'svelte';
import type { Theme, ThemeName } from './types';

export const THEME_CONTEXT_KEY = Symbol('stylist-theme');

export interface ThemeContext {
  theme: Theme;
  themeName: ThemeName;
  setTheme: (themeName: ThemeName) => void;
}

/**
 * Set the theme context
 */
export function setThemeContext(theme: Theme, themeName: ThemeName, setThemeFn: (name: ThemeName) => void): ThemeContext {
  const context: ThemeContext = {
    theme,
    themeName,
    setTheme: setThemeFn
  };

  setContext(THEME_CONTEXT_KEY, context);
  return context;
}

/**
 * Get the theme context
 * @throws Error if theme context is not found
 */
export function getThemeContext(): ThemeContext {
  const context = getContext<ThemeContext>(THEME_CONTEXT_KEY);

  if (!context) {
    throw new Error(
      'Theme context not found. Make sure to wrap your component with <ThemeProvider>.'
    );
  }

  return context;
}

/**
 * Get the theme context (optional - returns undefined if not found)
 */
export function getThemeContextOptional(): ThemeContext | undefined {
  return getContext<ThemeContext>(THEME_CONTEXT_KEY);
}
