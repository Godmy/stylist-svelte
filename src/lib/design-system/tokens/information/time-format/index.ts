export const TOKEN_TIME_FORMAT = ['datetime', 'time', 'date'] as const;

export type TokenTimeFormat = (typeof TOKEN_TIME_FORMAT)[number];
