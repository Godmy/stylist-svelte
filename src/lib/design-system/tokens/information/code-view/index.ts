export const TOKEN_CODE_VIEW = ['default', 'terminal', 'diff'] as const;

export type TokenCodeView = (typeof TOKEN_CODE_VIEW)[number];
