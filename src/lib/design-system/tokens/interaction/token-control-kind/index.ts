export const TOKEN_CONTROL_KINDS = ['radio', 'select', 'range', 'text'] as const;

export type TokenControlKind = (typeof TOKEN_CONTROL_KINDS)[number];
