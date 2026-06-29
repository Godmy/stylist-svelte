import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { TOKEN_FUNCTIONAL_TAXONOMY } from '$stylist/architecture/const/array/functional-taxonomy';
import type { StylistSelection } from '$stylist/development/type/struct/stylist-selection';

export type StylistProps = Omit<HTMLAttributes<HTMLDivElement> & SlotInteraction, 'class'> & {
	initialCategory?: (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number];
	class?: string;
	onSelectionChange?: (selection: StylistSelection) => void;
};
