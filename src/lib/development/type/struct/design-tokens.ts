export type Theme = typeof import('$stylist/theme/const/struct/theme-mode-light').THEME_MODE_LIGHT;

export type Props = {
  theme?: 'light' | 'dark';
  showTokens?: boolean;
  showColorPalette?: boolean;
  showSpacing?: boolean;
  showTypography?: boolean;
  showBorderRadius?: boolean;
  showShadows?: boolean;
};
