export const HORIZONTAL_POSITIONS = ['left', 'right'] as const;
export type InputAddonPosition = (typeof HORIZONTAL_POSITIONS)[number];
export type LabelPosition = (typeof HORIZONTAL_POSITIONS)[number];
