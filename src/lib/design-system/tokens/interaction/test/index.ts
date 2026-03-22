export const TOKEN_TEST = ['draft', 'running', 'completed', 'paused'] as const;

export type TokenTest = (typeof TOKEN_TEST)[number];
