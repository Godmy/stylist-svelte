export const TOKEN_VISIBILITY = ['visible', 'hidden', 'collapsed'] as const;

export type TokenVisibility = (typeof TOKEN_VISIBILITY)[number];
