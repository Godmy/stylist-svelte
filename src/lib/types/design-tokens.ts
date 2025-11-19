/**
 * Design Tokens для Stylist Svelte
 *
 * Единый источник истины для стилевых значений
 */

// Цвета
export const colorTokens = {
  // Основные цвета
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a'
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d'
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f'
  },
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d'
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717'
  }
};

// Пространства (spacing)
export const spacingTokens = {
  0: '0px',
  1: '0.25rem', // 4px
  2: '0.5rem',  // 8px
  3: '0.75rem', // 12px
  4: '1rem',    // 16px
  5: '1.25rem', // 20px
  6: '1.5rem',  // 24px
  8: '2rem',    // 32px
  10: '2.5rem', // 40px
  12: '3rem',   // 48px
  16: '4rem',   // 64px
  20: '5rem',   // 80px
  24: '6rem',   // 96px
  32: '8rem',   // 128px
  40: '10rem',  // 160px
  48: '12rem',  // 192px
  56: '14rem',  // 224px
  64: '16rem'   // 256px
};

// Типографика
export const typographyTokens = {
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',  // 18px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  }
};

// Радиусы
export const borderRadiusTokens = {
  none: '0px',
  sm: '0.125rem',   // 2px
  default: '0.25rem', // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px'
};

// Тени
export const shadowTokens = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none'
};

// Переменные для темы
export const themeVariables = {
  // Цветовые переменные для светлой темы
  light: {
    // Основные цвета
    'color-primary-50': colorTokens.primary[50],
    'color-primary-100': colorTokens.primary[100],
    'color-primary-200': colorTokens.primary[200],
    'color-primary-300': colorTokens.primary[300],
    'color-primary-400': colorTokens.primary[400],
    'color-primary-500': colorTokens.primary[500],
    'color-primary-600': colorTokens.primary[600],
    'color-primary-700': colorTokens.primary[700],
    'color-primary-800': colorTokens.primary[800],
    'color-primary-900': colorTokens.primary[900],

    // Вторичные цвета
    'color-secondary-50': colorTokens.secondary[50],
    'color-secondary-100': colorTokens.secondary[100],
    'color-secondary-200': colorTokens.secondary[200],
    'color-secondary-300': colorTokens.secondary[300],
    'color-secondary-400': colorTokens.secondary[400],
    'color-secondary-500': colorTokens.secondary[500],
    'color-secondary-600': colorTokens.secondary[600],
    'color-secondary-700': colorTokens.secondary[700],
    'color-secondary-800': colorTokens.secondary[800],
    'color-secondary-900': colorTokens.secondary[900],

    // Цвета состояний
    'color-success-50': colorTokens.success[50],
    'color-success-100': colorTokens.success[100],
    'color-success-200': colorTokens.success[200],
    'color-success-300': colorTokens.success[300],
    'color-success-400': colorTokens.success[400],
    'color-success-500': colorTokens.success[500],
    'color-success-600': colorTokens.success[600],
    'color-success-700': colorTokens.success[700],
    'color-success-800': colorTokens.success[800],
    'color-success-900': colorTokens.success[900],

    'color-warning-50': colorTokens.warning[50],
    'color-warning-100': colorTokens.warning[100],
    'color-warning-200': colorTokens.warning[200],
    'color-warning-300': colorTokens.warning[300],
    'color-warning-400': colorTokens.warning[400],
    'color-warning-500': colorTokens.warning[500],
    'color-warning-600': colorTokens.warning[600],
    'color-warning-700': colorTokens.warning[700],
    'color-warning-800': colorTokens.warning[800],
    'color-warning-900': colorTokens.warning[900],

    'color-danger-50': colorTokens.danger[50],
    'color-danger-100': colorTokens.danger[100],
    'color-danger-200': colorTokens.danger[200],
    'color-danger-300': colorTokens.danger[300],
    'color-danger-400': colorTokens.danger[400],
    'color-danger-500': colorTokens.danger[500],
    'color-danger-600': colorTokens.danger[600],
    'color-danger-700': colorTokens.danger[700],
    'color-danger-800': colorTokens.danger[800],
    'color-danger-900': colorTokens.danger[900],

    // Нейтральные цвета
    'color-neutral-50': colorTokens.neutral[50],
    'color-neutral-100': colorTokens.neutral[100],
    'color-neutral-200': colorTokens.neutral[200],
    'color-neutral-300': colorTokens.neutral[300],
    'color-neutral-400': colorTokens.neutral[400],
    'color-neutral-500': colorTokens.neutral[500],
    'color-neutral-600': colorTokens.neutral[600],
    'color-neutral-700': colorTokens.neutral[700],
    'color-neutral-800': colorTokens.neutral[800],
    'color-neutral-900': colorTokens.neutral[900],

    // Фон и текст
    'color-bg-primary': '#ffffff',
    'color-bg-secondary': '#f9fafb',
    'color-bg-tertiary': '#f3f4f6',

    'color-text-primary': '#111827',
    'color-text-secondary': '#4b5563',
    'color-text-tertiary': '#6b7280',
    'color-text-inverse': '#ffffff',

    // Границы
    'color-border-primary': '#d1d5db',
    'color-border-secondary': '#e5e7eb',
    'color-border-tertiary': '#f3f4f6',

    // Тени
    'shadow-color': 'rgba(0, 0, 0, 0.05)',

    // Элементы управления
    'color-control-bg': '#ffffff',
    'color-control-border': '#d1d5db',
    'color-control-text': '#111827',
    'color-control-hover-bg': '#f9fafb',
    'color-control-active-bg': '#f3f4f6'
  },

  // Цветовые переменные для темной темы
  dark: {
    // Основные цвета (тот же оттенок, но адаптированный под темную тему)
    'color-primary-50': '#eef2ff',
    'color-primary-100': '#e0e7ff',
    'color-primary-200': '#c7d2fe',
    'color-primary-300': '#a5b4fc',
    'color-primary-400': '#818cf8',
    'color-primary-500': '#6366f1',
    'color-primary-600': '#4f46e5',
    'color-primary-700': '#4338ca',
    'color-primary-800': '#3730a3',
    'color-primary-900': '#312e81',

    // Вторичные цвета
    'color-secondary-50': '#f8fafc',
    'color-secondary-100': '#f1f5f9',
    'color-secondary-200': '#e2e8f0',
    'color-secondary-300': '#cbd5e1',
    'color-secondary-400': '#94a3b8',
    'color-secondary-500': '#64748b',
    'color-secondary-600': '#475569',
    'color-secondary-700': '#334155',
    'color-secondary-800': '#1e293b',
    'color-secondary-900': '#0f172a',

    // Цвета состояний
    'color-success-50': '#f0fdf9',
    'color-success-100': '#ccfbf1',
    'color-success-200': '#99f6e4',
    'color-success-300': '#5eead4',
    'color-success-400': '#2dd4bf',
    'color-success-500': '#14b8a6',
    'color-success-600': '#0d9488',
    'color-success-700': '#0f766e',
    'color-success-800': '#115e59',
    'color-success-900': '#134e4a',

    'color-warning-50': '#fffbeb',
    'color-warning-100': '#fef3c7',
    'color-warning-200': '#fde68a',
    'color-warning-300': '#fcd34d',
    'color-warning-400': '#fbbf24',
    'color-warning-500': '#f59e0b',
    'color-warning-600': '#d97706',
    'color-warning-700': '#b45309',
    'color-warning-800': '#92400e',
    'color-warning-900': '#78350f',

    'color-danger-50': '#fef2f2',
    'color-danger-100': '#fee2e2',
    'color-danger-200': '#fecaca',
    'color-danger-300': '#fca5a5',
    'color-danger-400': '#f87171',
    'color-danger-500': '#ef4444',
    'color-danger-600': '#dc2626',
    'color-danger-700': '#b91c1c',
    'color-danger-800': '#991b1b',
    'color-danger-900': '#7f1d1d',

    // Нейтральные цвета
    'color-neutral-50': '#fafafa',
    'color-neutral-100': '#f5f5f5',
    'color-neutral-200': '#e5e5e5',
    'color-neutral-300': '#d4d4d4',
    'color-neutral-400': '#a3a3a3',
    'color-neutral-500': '#737373',
    'color-neutral-600': '#525252',
    'color-neutral-700': '#404040',
    'color-neutral-800': '#262626',
    'color-neutral-900': '#171717',

    // Фон и текст
    'color-bg-primary': '#0f172a',
    'color-bg-secondary': '#1e293b',
    'color-bg-tertiary': '#334155',

    'color-text-primary': '#f1f5f9',
    'color-text-secondary': '#cbd5e1',
    'color-text-tertiary': '#94a3b8',
    'color-text-inverse': '#0f172a',

    // Границы
    'color-border-primary': '#475569',
    'color-border-secondary': '#334155',
    'color-border-tertiary': '#1e293b',

    // Тени
    'shadow-color': 'rgba(0, 0, 0, 0.2)',

    // Элементы управления
    'color-control-bg': '#334155',
    'color-control-border': '#475569',
    'color-control-text': '#f1f5f9',
    'color-control-hover-bg': '#475569',
    'color-control-active-bg': '#1e293b'
  }
};

// Тема по умолчанию (светлая)
export const designSystemDefaultTheme = {
  colors: themeVariables.light,
  spacing: spacingTokens,
  typography: typographyTokens,
  borderRadius: borderRadiusTokens,
  shadows: shadowTokens
};

// Тема для темного режима
export const designSystemDarkTheme = {
  colors: themeVariables.dark,
  spacing: spacingTokens,
  typography: typographyTokens,
  borderRadius: borderRadiusTokens,
  shadows: shadowTokens
};