/** Blur tokens. */
export const BLUR = {
  0: '0',
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px'
} as const;

export type BlurKey = keyof typeof BLUR;
