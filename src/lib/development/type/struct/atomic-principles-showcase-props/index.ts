import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { RecipeAtomicPrinciples } from '$stylist/development/interface/recipe/atomic-principles';
import type { AtomicPrinciplesShowcaseAtomicPrinciplesStats } from '$stylist/development/type/struct/atomic-principles-showcase-atomic-principles-stats';

export type AtomicPrinciplesShowcaseProps = RecipeAtomicPrinciples &
	HTMLAttributes<HTMLElement> & SlotThemeBorder & SlotTypography & {
		/** Statistics data for atomic components */
		stats?: AtomicPrinciplesShowcaseAtomicPrinciplesStats;
		/** Badge text displayed at the top */
		badgeText?: string;
		/** Main section title */
		title?: string;
		/** Description text below the title */
		description?: string;
	};
