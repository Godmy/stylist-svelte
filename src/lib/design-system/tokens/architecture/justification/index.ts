export const TOKEN_JUSTIFICATION = ['stretch', 'baseline', 'between', 'around', 'evenly', 'justify'] as const;

export type TokenJustification = (typeof TOKEN_JUSTIFICATION)[number];
