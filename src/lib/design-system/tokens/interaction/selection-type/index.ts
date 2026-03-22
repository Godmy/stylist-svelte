export const TOKEN_SELECTION_TYPE = ['single', 'multiple'] as const;

export type TokenSelectionType = (typeof TOKEN_SELECTION_TYPE)[number];
