import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * DropdownMenu types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';
import type { TokenAlignment } from '$stylist/layout/type/alias/alignment';
import type { SlotCloseDropdownFunc } from '$stylist/navigation/interface/slot/close-dropdown-func';

export interface SlotDropdownMenu
	extends Omit<HTMLAttributes<HTMLElement>, 'children'>,
		SlotInteraction {
	label: string;
	position?: TokenAlignment;
	disabled?: boolean;
	class?: string;
	children?: Snippet<[SlotCloseDropdownFunc]>;
}
