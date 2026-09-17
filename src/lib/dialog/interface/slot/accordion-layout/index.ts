import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
export interface SlotAccordionLayout extends HTMLAttributes<HTMLDivElement> {
	value: string;
	title: string;
	children?: Snippet;
	/** Доп. содержимое в заголовке после title, перед шевроном (например, иконки-бейджи выбранных значений). */
	headerEnd?: Snippet;
	disabled?: boolean;
	class?: string;
}
