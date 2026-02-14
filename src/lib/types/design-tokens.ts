import { amber, blue, borderRadius, green, red, shadow, slate, spacing, teal, typography } from '$lib/design-system/tokens';

function toColorTokens<T extends Record<string | number, string>>(prefix: string, scale: T): Record<string, string> {
  return Object.fromEntries(Object.entries(scale).map(([key, value]) => [`color-${prefix}-${key}`, value]));
}

const baseColors: Record<string, string> = {
  ...toColorTokens('primary', blue as unknown as Record<string, string>),
  ...toColorTokens('secondary', slate as unknown as Record<string, string>),
  ...toColorTokens('success', green as unknown as Record<string, string>),
  ...toColorTokens('warning', amber as unknown as Record<string, string>),
  ...toColorTokens('danger', red as unknown as Record<string, string>),
  ...toColorTokens('info', teal as unknown as Record<string, string>)
};

export const designSystemDefaultTheme = {
  colors: baseColors,
  spacing,
  typography,
  borderRadius,
  boxShadow: shadow
} as const;

export const designSystemDarkTheme = {
  colors: baseColors,
  spacing,
  typography,
  borderRadius,
  boxShadow: shadow
} as const;


