import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { AtomicPrinciplesRecipe } from '$stylist/information/interface/recipe/atomic-principles';
import type { AtomicPrinciplesShowcaseAtomicPrinciplesStats } from '$stylist/development/type/struct/atomic-principles-showcase-atomic-principles-stats';

export type AtomicPrinciplesShowcaseProps = AtomicPrinciplesRecipe &
	InformationHTMLAttributes<HTMLElement> & {
		/** Statistics data for atomic components */
		stats?: AtomicPrinciplesShowcaseAtomicPrinciplesStats;
		/** Badge text displayed at the top */
		badgeText?: string;
		/** Main section title */
		title?: string;
		/** Description text below the title */
		description?: string;
	};
