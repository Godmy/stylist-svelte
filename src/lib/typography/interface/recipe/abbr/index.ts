import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';

export interface RecipeAbbr extends Omit<HTMLAttributes<HTMLElement>, 'children'>, SlotChildren {
	title?: string;
}
