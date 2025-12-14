/**
 * CSS Variables Generator
 * Automatically generates CSS custom properties from theme objects
 */

import type { Theme } from '../../themes/types';
import type { ColorScale } from '../../tokens/colors';

/**
 * Flattens a nested object into CSS variable format
 * Example: { colors: { primary: { 500: '#000' } } } => '--color-primary-500: #000'
 */
function flattenObject(
  obj: any,
  prefix = '',
  result: Record<string, string> = {}
): Record<string, string> {
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}-${key}` : key;

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = String(value);
    }
  }

  return result;
}

/**
 * Converts a theme object to CSS variables object
 */
export function themeToCSSVars(theme: Theme): Record<string, string> {
  const vars: Record<string, string> = {};

  // Process colors
  // Primary scale
  Object.entries(theme.colors.primary).forEach(([shade, color]) => {
    vars[`color-primary-${shade}`] = color;
  });

  // Secondary scale
  Object.entries(theme.colors.secondary).forEach(([shade, color]) => {
    vars[`color-secondary-${shade}`] = color;
  });

  // Success scale
  Object.entries(theme.colors.success).forEach(([shade, color]) => {
    vars[`color-success-${shade}`] = color;
  });

  // Warning scale
  Object.entries(theme.colors.warning).forEach(([shade, color]) => {
    vars[`color-warning-${shade}`] = color;
  });

  // Danger scale
  Object.entries(theme.colors.danger).forEach(([shade, color]) => {
    vars[`color-danger-${shade}`] = color;
  });

  // Neutral scale
  Object.entries(theme.colors.neutral).forEach(([shade, color]) => {
    vars[`color-neutral-${shade}`] = color;
  });

  // Background colors
  vars['color-bg-primary'] = theme.colors.background.primary;
  vars['color-bg-secondary'] = theme.colors.background.secondary;
  vars['color-bg-tertiary'] = theme.colors.background.tertiary;

  // Text colors
  vars['color-text-primary'] = theme.colors.text.primary;
  vars['color-text-secondary'] = theme.colors.text.secondary;
  vars['color-text-tertiary'] = theme.colors.text.tertiary;
  vars['color-text-inverse'] = theme.colors.text.inverse;

  // Border colors
  vars['color-border-primary'] = theme.colors.border.primary;
  vars['color-border-secondary'] = theme.colors.border.secondary;
  vars['color-border-tertiary'] = theme.colors.border.tertiary;

  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    vars[`spacing-${key}`] = value;
  });

  // Typography
  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    vars[`font-size-${key}`] = value;
  });

  Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
    vars[`font-weight-${key}`] = value;
  });

  Object.entries(theme.typography.lineHeight).forEach(([key, value]) => {
    vars[`line-height-${key}`] = value;
  });

  vars['font-family-sans'] = theme.typography.fontFamily;

  // Border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    vars[`radius-${key}`] = value;
  });

  // Box shadows
  Object.entries(theme.boxShadow).forEach(([key, value]) => {
    vars[`shadow-${key}`] = value;
  });

  return vars;
}

/**
 * Applies CSS variables to a DOM element
 */
export function applyCSSVars(element: HTMLElement, vars: Record<string, string>): void {
  Object.entries(vars).forEach(([key, value]) => {
    element.style.setProperty(`--${key}`, value);
  });
}

/**
 * Removes CSS variables from a DOM element
 */
export function removeCSSVars(element: HTMLElement, varNames: string[]): void {
  varNames.forEach((name) => {
    element.style.removeProperty(`--${name}`);
  });
}

/**
 * Applies a theme to the document root
 */
export function applyThemeToDOM(theme: Theme, element: HTMLElement = document.documentElement): void {
  const vars = themeToCSSVars(theme);
  applyCSSVars(element, vars);

  // Set data attribute for CSS selectors
  element.setAttribute('data-theme', theme.name);
}

/**
 * Generates CSS string from theme (for static CSS generation)
 */
export function generateThemeCSS(theme: Theme, selector = ':root'): string {
  const vars = themeToCSSVars(theme);
  const cssVars = Object.entries(vars)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n');

  return `${selector} {\n${cssVars}\n}`;
}
