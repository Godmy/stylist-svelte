export const CARD_TYPES = ['default', 'featured', 'compact', 'detailed'] as const;
export type CardType = (typeof CARD_TYPES)[number];
