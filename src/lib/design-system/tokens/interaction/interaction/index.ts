export const TOKEN_INTERACTION = ['enabled', 'disabled', 'readonly'] as const;

export type TokenInteration = (typeof TOKEN_INTERACTION)[number];
