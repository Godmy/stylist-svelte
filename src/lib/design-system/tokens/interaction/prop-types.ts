export const PROP_TYPES = ['string', 'number', 'boolean', 'enum'] as const;

export type PropType = (typeof PROP_TYPES)[number];
