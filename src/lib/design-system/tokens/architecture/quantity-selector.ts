export const QUANTITY_SELECTOR_VARIANTS = ['default', 'minimal', 'filled'] as const;
export type QuantitySelectorVariant = (typeof QUANTITY_SELECTOR_VARIANTS)[number];
