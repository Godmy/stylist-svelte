import type { TierContent } from '$stylist/architecture/type/alias/tier';

export const TEAM_MEMBER_CARD_VARIANT_CLASSES: Partial<Record<TierContent, string>> = {
	detailed: '',
	compact: 'p-2',
	screen: 'p-8',
	icon: 'ring-2 ring-[var(--color-primary-500)] shadow-lg scale-[1.02] border-[var(--color-primary-300)]'
};
