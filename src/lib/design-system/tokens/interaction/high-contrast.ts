export const HIGH_CONTRAST_THEMES = ['light', 'dark'] as const;
export type THighContrastTheme = (typeof HIGH_CONTRAST_THEMES)[number];
