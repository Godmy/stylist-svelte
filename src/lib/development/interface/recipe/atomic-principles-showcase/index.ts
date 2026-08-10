import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { AtomicPrinciplesShowcaseAtomicPrinciplesStats } from '$stylist/development/type/struct/atomic-principles-showcase-atomic-principles-stats';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeAtomicPrinciplesShowcase
	extends ComputeIntersectAll<[((Omit<HTMLAttributes<HTMLElement>, 'class'> & SlotThemeBorder & SlotTypography & {
stats?: AtomicPrinciplesShowcaseAtomicPrinciplesStats;
	badgeText?: string;
	title?: string;
	description?: string;
	class?: string;
}))]> {}
