export const TOKEN_FLOW = ['completed', 'current', 'upcoming', 'skipped'] as const;

export type TokenFlow = (typeof TOKEN_FLOW)[number];
