export const TOKEN_PRIORITY = ['low', 'medium', 'high', 'urgent', 'critical'] as const;

export type TokenPriority = (typeof TOKEN_PRIORITY)[number];
