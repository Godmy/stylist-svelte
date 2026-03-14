export const ICON_PICKER_COLUMN_COUNTS = [2, 3, 4, 5, 6, 7, 8] as const;
export type TColumns = (typeof ICON_PICKER_COLUMN_COUNTS)[number];
