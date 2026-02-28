export const TOGGLE_GROUP_TYPES = ['single', 'multiple'] as const;

export type ToggleGroupType = (typeof TOGGLE_GROUP_TYPES)[number];
