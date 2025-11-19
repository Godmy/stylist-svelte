/**
 * Theme Context for Stylist Svelte
 *
 * Provides a centralized theme system that propagates throughout the component tree
 */

import { getContext, setContext } from 'svelte';
import type { Theme, ThemeName } from './types';

/** Key for theme context */
export const THEME_CONTEXT_KEY = 'theme-context';

/** Theme context interface */
export interface ThemeContext {
  theme: Theme;
  setTheme: (themeName: ThemeName) => void;
  currentTheme: ThemeName;
}

/**
 * Sets the theme context
 * @param theme - The theme object
 * @param setThemeFn - Function to change theme
 * @param currentThemeName - Current theme name
 * @returns The theme context
 */
export function setThemeContext(theme: Theme, setThemeFn: (themeName: ThemeName) => void, currentThemeName: ThemeName): ThemeContext {
  const context: ThemeContext = {
    theme,
    setTheme: setThemeFn,
    currentTheme: currentThemeName
  };
  
  setContext(THEME_CONTEXT_KEY, context);
  return context;
}

/**
 * Gets the theme context
 * @returns The theme context
 * @throws Error if theme context is not found
 */
export function getThemeContext(): ThemeContext {
  const context = getContext<ThemeContext>(THEME_CONTEXT_KEY);
  if (!context) {
    throw new Error('ThemeContext not found. Make sure to wrap your component with ThemeProvider.');
  }
  return context;
}