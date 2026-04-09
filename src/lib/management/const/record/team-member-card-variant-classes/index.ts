import type { TierContent } from '$stylist/architecture/type/enum/tier';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';

export const TEAM_MEMBER_CARD_VARIANT_CLASSES: Partial<Record<TierContent, string>> = {
	detailed: '',
	compact: 'p-2',
	screen: 'p-8',
	icon: 'ring-2 ring-[var(--color-primary-500)] shadow-lg scale-[1.02] border-[var(--color-primary-300)]'
};
