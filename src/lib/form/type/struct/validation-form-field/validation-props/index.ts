import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';

export type ValidationProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	label?: string;
	description?: string;
	required?: boolean;
	error?: string;
	hint?: string;
	disabled?: boolean;
	orientation?: (typeof TOKEN_ORIENTATION)[number];
	class?: string;
	id?: string;
	children: Snippet;
};
