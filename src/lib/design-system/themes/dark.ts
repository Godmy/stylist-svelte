/**
 * Dark Theme Definition
 * Uses design tokens to build a cohesive dark theme
 */

import { blue, slate, teal, amber, red, neutral } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { fontSize, fontWeight, lineHeight, fontFamily } from '../tokens/typography';
import { borderRadius } from '../tokens/radius';
import { boxShadow } from '../tokens/shadows';
import type { Theme } from './types';

export const darkTheme: Theme = {
  name: 'dark',

  colors: {
    // Semantic color mappings (adjusted for dark theme)
    primary: blue,
    secondary: slate,
    success: teal,      // Using teal instead of green for better dark theme contrast
    warning: amber,
    danger: red,
    neutral: neutral,

    // Surface colors (dark backgrounds)
    background: {
      primary: slate[900],      // #0f172a
      secondary: slate[800],    // #1e293b
      tertiary: slate[700]      // #334155
    },

    // Text colors (light text on dark)
    text: {
      primary: slate[50],       // #f8fafc
      secondary: slate[300],    // #cbd5e1
      tertiary: slate[400],     // #94a3b8
      inverse: slate[900]       // #0f172a
    },

    // Border colors (lighter borders for dark mode)
    border: {
      primary: slate[600],      // #475569
      secondary: slate[700],    // #334155
      tertiary: slate[800]      // #1e293b
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
