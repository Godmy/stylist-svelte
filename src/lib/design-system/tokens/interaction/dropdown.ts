export const DROPDOWN_POSITIONS = ['left', 'right', 'center'] as const;
export type DropdownPosition = (typeof DROPDOWN_POSITIONS)[number];
