export const BACKGROUND = ['default', 'gradient', 'particles', 'image'] as const;
export type Background = (typeof BACKGROUND)[number];
