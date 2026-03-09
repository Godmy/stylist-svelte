export const SELECTION_TYPE = ['single', 'multiple'] as const;

export type ToggleGroupType = (typeof SELECTION_TYPE)[number];

