import { applyThemeToDOM, darkTheme, lightTheme } from '../../design-system';
import type { Theme, ThemeName } from '../../design-system';

type ThemeType = ThemeName;

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

const THEMES: Record<ThemeName, Theme> = {
  light: lightTheme,
  dark: darkTheme
};

const THEME_NAMES = Object.keys(THEMES) as ThemeName[];

export function setCSSVariables(vars: CSSVariableConfig): void {
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export function getCSSVariable(key: string): string | null {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(key);
  }
  return null;
}

export function supportsTheme(theme: ThemeName): theme is ThemeType {
  return THEME_NAMES.includes(theme);
}

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

export function toggleTheme(): ThemeType {
  const current = getCurrentTheme();
  const newTheme = current === 'light' ? 'dark' : 'light';

  if (typeof window !== 'undefined') {
    const theme = THEMES[newTheme];
    applyThemeToDOM(theme);
    localStorage.setItem('stylist-theme', newTheme);
    document.documentElement.classList.remove(...THEME_NAMES);
    document.documentElement.classList.add(newTheme);
  }

  return newTheme;
}

export function isDarkTheme(theme?: ThemeType): boolean {
  if (!theme) {
    theme = getCurrentTheme();
  }
  return theme === 'dark';
}

export function normalizeClassNames(...classes: (string | boolean | null | undefined)[]): string {
  return classes
    .filter(Boolean)
    .map(cls => String(cls).trim())
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function mergeStyles(...styles: (string | null | undefined)[]): string {
  return styles.filter(Boolean).join('; ');
}
