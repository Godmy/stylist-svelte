/**
 * Theme Type Definitions
 */

import type { ColorScale } from '../tokens/colors';

/**
 * Semantic color mappings for a theme
 */
export interface ThemeColors {
  // Semantic color scales
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  neutral: ColorScale;

  // Surface colors
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };

  // Text colors
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
  };

  // Border colors
  border: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

/**
 * Complete theme structure
 */
export interface Theme {
  name: string;
  colors: ThemeColors;
  spacing: Record<string, string>;
  typography: {
    fontFamily: string;
    fontSize: Record<string, string>;
    fontWeight: Record<string, string>;
    lineHeight: Record<string, string>;
  };
  borderRadius: Record<string, string>;
  boxShadow: Record<string, string>;
}

/**
 * Theme names
 */
export type ThemeName = 'light' | 'dark';
