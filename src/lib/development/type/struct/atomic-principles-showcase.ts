import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { AtomicPrinciplesRecipe } from '$stylist/information/interface/recipe/atomic-principles';

export type AtomicPrinciplesStats = {
	atoms: number;
	molecules: number;
	organisms: number;
};

export type Props = AtomicPrinciplesRecipe &
	InformationHTMLAttributes<HTMLElement> & {
		/** Statistics data for atomic components */
		stats?: AtomicPrinciplesStats;
		/** Badge text displayed at the top */
		badgeText?: string;
		/** Main section title */
		title?: string;
		/** Description text below the title */
		description?: string;
	};
