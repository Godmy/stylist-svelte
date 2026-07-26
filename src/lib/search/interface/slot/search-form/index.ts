import type { HTMLAttributes } from 'svelte/elements';

export interface SlotSearchForm extends HTMLAttributes<HTMLFormElement> {
	query?: string;
	placeholder?: string;
	class?: string;
}
