export const TOKEN_SEVERITY = ['default', 'active', 'error', 'warning'] as const;

export type TokenSeverity = (typeof TOKEN_SEVERITY)[number];
