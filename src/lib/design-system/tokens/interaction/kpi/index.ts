export const TOKEN_KPI = ['on-track', 'at-risk', 'off-track', 'exceeded'] as const;

export type TokenKPI = (typeof TOKEN_KPI)[number];
