import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { SplitLayoutDirection } from '$stylist/layout/type/enum/split-layout-direction';

export type ValidationProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	label?: string;
	description?: string;
	required?: boolean;
	error?: string;
	hint?: string;
	disabled?: boolean;
	orientation?: SplitLayoutDirection;
	class?: string;
	id?: string;
	children: Snippet;
};
