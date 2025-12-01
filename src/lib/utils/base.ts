// $lib/utils/base.ts
import type { Theme } from '$lib/themes/types';
import type { ThemeName } from '$lib/themes/types';

// Define the theme name type for the functions that work with theme names
type ThemeType = ThemeName;

// Типы для базовой системы
export interface BaseComponentConfig {
  theme: Theme;
  className?: string;
  style?: string;
  animation?: boolean;
  responsive?: boolean;
}

export interface CSSVariableConfig {
  [key: string]: string;
}

// Утилита для установки CSS-переменных
export function setCSSVariables(vars: CSSVariableConfig): void {
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

// Утилита для получения CSS-переменной
export function getCSSVariable(key: string): string | null {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(key);
  }
  return null;
}

// Утилита для проверки поддержки темы
export function supportsTheme(theme: ThemeName): theme is ThemeType {
  return (['light', 'dark'] as const).includes(theme as ThemeName);
}

// Утилита для получения текущей темы
export function getCurrentTheme(): ThemeType {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('stylist-theme');
    if (stored && supportsTheme(stored as ThemeName)) {
      return stored as ThemeType;
    }

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  }
  return 'light';
}

// Утилита для переключения темы
export function toggleTheme(): ThemeType {
  const current = getCurrentTheme();
  const newTheme = current === 'light' ? 'dark' : 'light';

  if (typeof window !== 'undefined') {
    localStorage.setItem('stylist-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  }

  return newTheme;
}

// Утилита для проверки, является ли тема темной
export function isDarkTheme(theme?: ThemeType): boolean {
  if (!theme) {
    theme = getCurrentTheme();
  }
  return theme === 'dark';
}

// Утилита для нормализации классов
export function normalizeClassNames(...classes: (string | boolean | null | undefined)[]): string {
  return classes
    .filter(Boolean)
    .map(cls => String(cls).trim())
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Утилита для объединения стилей
export function mergeStyles(...styles: (string | null | undefined)[]): string {
  return styles.filter(Boolean).join('; ');
}