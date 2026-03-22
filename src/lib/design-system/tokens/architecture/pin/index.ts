export const TOKEN_PIN = ['person', 'place', 'business'] as const;

export type TokenPin = (typeof TOKEN_PIN)[number];
