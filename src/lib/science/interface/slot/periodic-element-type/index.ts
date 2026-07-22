import type { HTMLAttributes } from 'svelte/elements';

export interface SlotPeriodicElementType extends HTMLAttributes<HTMLButtonElement> {
	category: string;
	selected?: boolean;
	accent?: string;
	onSelect?: (category: string) => void;
}
