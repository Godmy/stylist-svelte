export const PRODUCT_CARD_VARIANTS = ['default', 'compact', 'with-actions'] as const;
export type ProductCardVariant = (typeof PRODUCT_CARD_VARIANTS)[number];
