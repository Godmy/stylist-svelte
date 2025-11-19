/**
 * Темы для библиотеки компонентов
 * Определяет цветовые схемы и стилевые переменные
 */

export interface Theme {
  colors: {
    primary: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    secondary: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    success: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    warning: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    danger: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    text: {
      primary: string;
      secondary: string;
      inverse: string;
    };
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    border: {
      primary: string;
      secondary: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    fontFamily: string;
    sizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
  };
}

export const lightTheme: Theme = {
  colors: {
    primary: {
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81'
    },
    secondary: {
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    },
    success: {
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
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
      inverse: '#ffffff'
    },
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6'
    },
    border: {
      primary: '#e5e7eb',
      secondary: '#d1d5db'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem'
    }
  }
};

export const darkTheme: Theme = {
  colors: {
    primary: {
      100: '#c7d2fe',
      200: '#a5b4fc',
      300: '#818cf8',
      400: '#6366f1',
      500: '#4f46e5',
      600: '#4338ca',
      700: '#3730a3',
      800: '#312e81',
      900: '#1e1b4b'
    },
    secondary: {
      100: '#1f2937',
      200: '#374151',
      300: '#4b5563',
      400: '#6b7280',
      500: '#9ca3af',
      600: '#d1d5db',
      700: '#e5e7eb',
      800: '#f3f4f6',
      900: '#f9fafb'
    },
    success: {
      100: '#86efac',
      200: '#4ade80',
      300: '#22c55e',
      400: '#16a34a',
      500: '#15803d',
      600: '#166534',
      700: '#134e2e',
      800: '#112f21',
      900: '#0e1f17'
    },
    warning: {
      100: '#fcd34d',
      200: '#fbbf24',
      300: '#f59e0b',
      400: '#d97706',
      500: '#b45309',
      600: '#92400e',
      700: '#78350f',
      800: '#5c2509',
      900: '#401a07'
    },
    danger: {
      100: '#fca5a5',
      200: '#f87171',
      300: '#ef4444',
      400: '#dc2626',
      500: '#b91c1c',
      600: '#991b1b',
      700: '#7f1d1d',
      800: '#450a0a',
      900: '#220808'
    },
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db',
      inverse: '#1f2937'
    },
    background: {
      primary: '#111827',
      secondary: '#1f2937',
      tertiary: '#374151'
    },
    border: {
      primary: '#374151',
      secondary: '#4b5563'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem'
    }
  }
};

export const themes = {
  light: lightTheme,
  dark: darkTheme
};

export type ThemeName = keyof typeof themes;