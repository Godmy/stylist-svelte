export const TOKEN_VALIDATION = ['valid', 'invalid', 'pending'] as const;

export type TokenValidation = (typeof TOKEN_VALIDATION)[number];
