import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { RecipeAtomicPrinciples } from '$stylist/information/interface/recipe/atomic-principles';
import type { AtomicPrinciplesShowcaseAtomicPrinciplesStats } from '$stylist/development/type/struct/atomic-principles-showcase-atomic-principles-stats';

export type AtomicPrinciplesShowcaseProps = RecipeAtomicPrinciples &
	HTMLAttributes<HTMLElement> & SlotThemeBorder & BehaviorTypography & {
		/** Statistics data for atomic components */
		stats?: AtomicPrinciplesShowcaseAtomicPrinciplesStats;
		/** Badge text displayed at the top */
		badgeText?: string;
		/** Main section title */
		title?: string;
		/** Description text below the title */
		description?: string;
	};
