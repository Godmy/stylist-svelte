import type { TierContent } from '$stylist/architecture/type/alias/tier';

export const PRODUCT_CARD_DESCRIPTION_VARIANT_CLASSES: Partial<Record<TierContent, string>> = {
	detailed: 'mb-2 text-sm text-[var(--color-text-secondary)]',
	compact: 'hidden',
	screen: 'mb-2 flex-1 text-sm text-[var(--color-text-secondary)]'
};
