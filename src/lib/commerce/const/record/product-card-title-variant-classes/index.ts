import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';
import type { TierContent } from '$stylist/architecture/type/enum/tier';

export const PRODUCT_CARD_TITLE_VARIANT_CLASSES: Partial<Record<TierContent, string>> = {
	detailed: 'mb-1 text-lg font-semibold text-[var(--color-text-primary)]',
	compact: 'mb-1 truncate text-base font-semibold text-[var(--color-text-primary)]',
	screen: 'mb-1 text-lg font-semibold text-[var(--color-text-primary)]'
};
