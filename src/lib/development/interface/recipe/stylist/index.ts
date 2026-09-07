import type { HTMLAttributes } from 'svelte/elements';
import type { TOKEN_FUNCTIONAL_TAXONOMY } from '$stylist/development/const/array/functional-taxonomy';
import type { StylistSelection as SlotStylistSelection } from '$stylist/development/interface/slot/stylist-selection';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeStylist
	extends ComputeIntersectAll<
		[
			Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
				initialCategory?: (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number];
				class?: string;
				onSelectionChange?: (selection: SlotStylistSelection) => void;
			}
		]
	> {}
