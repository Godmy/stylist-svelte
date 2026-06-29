import type { TierContent } from '$stylist/architecture/type/alias/tier';

export const PRODUCT_CARD_CONTAINER_VARIANT_CLASSES: Partial<Record<TierContent, string>> = {
	detailed: 'max-w-sm shadow-md',
	compact: 'max-w-xs shadow-sm',
	screen: 'max-w-sm shadow-md'
};
