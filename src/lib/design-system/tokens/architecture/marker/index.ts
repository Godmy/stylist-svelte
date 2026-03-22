export const TOKEN_MARKER = ['dot', 'number', 'letter', 'check', 'x'] as const;

export type TokenMarker = (typeof TOKEN_MARKER)[number];
