import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';
import type { TierContent } from '$stylist/architecture/type/enum/tier';

export const PRODUCT_CARD_CONTENT_VARIANT_CLASSES: Partial<Record<TierContent, string>> = {
	detailed: 'flex flex-1 flex-col p-4',
	compact: 'p-3',
	screen: 'flex flex-1 flex-col p-4'
};
