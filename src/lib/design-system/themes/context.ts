/**
 * Контекст темы для Svelte
 * Обеспечивает доступ к теме по всему дереву компонентов
 */

import { getContext, setContext } from 'svelte';
import type { Theme, ThemeName } from './types';

/**
 * Ключ контекста темы
 */
export const THEME_CONTEXT_KEY = Symbol('stylist-theme');

/**
 * Интерфейс контекста темы
 */
export interface ThemeContext {
  theme: Theme;                     // Текущая тема
  themeName: ThemeName;             // Имя текущей темы
  setTheme: (themeName: ThemeName) => void;  // Функция для изменения темы
}

/**
 * Устанавливает контекст темы
 * @param theme Объект темы
 * @param themeName Имя темы
 * @param setThemeFn Функция для изменения темы
 * @returns Контекст темы
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
 * Получает контекст темы
 * @throws Error если контекст темы не найден
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
 * Получает контекст темы (опционально - возвращает undefined, если не найден)
 * @returns Контекст темы или undefined
 */
export function getThemeContextOptional(): ThemeContext | undefined {
  return getContext<ThemeContext>(THEME_CONTEXT_KEY);
}
