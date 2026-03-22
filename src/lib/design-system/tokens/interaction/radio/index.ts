export const TOKEN_RADIO = ['unchecked', 'checked'] as const;

export type TokenRadio = (typeof TOKEN_RADIO)[number];
