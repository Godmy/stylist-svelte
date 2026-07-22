import type { HTMLAttributes } from 'svelte/elements';

export interface SlotScreenReader extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	content?: string;
	class?: string;
}
