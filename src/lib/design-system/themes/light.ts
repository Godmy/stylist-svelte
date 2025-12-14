/**
 * Light Theme Definition
 * Uses design tokens to build a cohesive light theme
 */

import { blue, slate, green, amber, red, neutral } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { fontSize, fontWeight, lineHeight, fontFamily } from '../tokens/typography';
import { borderRadius } from '../tokens/radius';
import { boxShadow } from '../tokens/shadows';
import type { Theme } from './types';

export const lightTheme: Theme = {
  name: 'light',

  colors: {
    // Semantic color mappings
    primary: blue,
    secondary: slate,
    success: green,
    warning: amber,
    danger: red,
    neutral: neutral,

    // Surface colors
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6'
    },

    // Text colors
    text: {
      primary: slate[900],      // #0f172a
      secondary: slate[600],    // #475569
      tertiary: slate[500],     // #64748b
      inverse: '#ffffff'
    },

    // Border colors
    border: {
      primary: slate[200],      // #e2e8f0
      secondary: slate[300],    // #cbd5e1
      tertiary: slate[100]      // #f1f5f9
    }
  },

  spacing,

  typography: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize as Record<string, string>,
    fontWeight: fontWeight as Record<string, string>,
    lineHeight: lineHeight as Record<string, string>
  },

  borderRadius: borderRadius as Record<string, string>,
  boxShadow: boxShadow as Record<string, string>
};
