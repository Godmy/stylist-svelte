import type { TierContent } from '$stylist/architecture/type/alias/tier';

export const PRODUCT_CARD_IMAGE_CONTAINER_VARIANT_CLASSES: Partial<Record<TierContent, string>> = {
	detailed: 'relative',
	compact: 'relative h-32 w-full',
	screen: 'relative'
};
