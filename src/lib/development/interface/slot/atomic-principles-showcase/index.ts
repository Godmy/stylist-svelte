import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { AtomicPrinciplesShowcaseAtomicPrinciplesStats } from '$stylist/development/type/struct/atomic-principles-showcase-atomic-principles-stats';

export interface SlotAtomicPrinciplesShowcase
	extends Omit<HTMLAttributes<HTMLElement>, 'class'>, SlotThemeBorder, SlotTypography {
	stats?: AtomicPrinciplesShowcaseAtomicPrinciplesStats;
	badgeText?: string;
	title?: string;
	description?: string;
	class?: string;
}
