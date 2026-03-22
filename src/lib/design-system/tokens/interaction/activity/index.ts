export const TOKEN_ACTIVITY = ['active', 'inactive', 'pending', 'paused', 'completed'] as const;

export type TokenActivity = (typeof TOKEN_ACTIVITY)[number];
