import type { HTMLAttributes } from 'svelte/elements';
import type { TOKEN_FUNCTIONAL_TAXONOMY } from '$stylist/architecture/const/array/functional-taxonomy';
import type { StylistSelection } from '$stylist/development/type/struct/stylist-selection';

export interface SlotStylist extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	initialCategory?: (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number];
	class?: string;
	onSelectionChange?: (selection: StylistSelection) => void;
}
