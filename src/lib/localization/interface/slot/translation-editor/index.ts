import type { HTMLAttributes } from 'svelte/elements';

export interface SlotTranslationEditor extends HTMLAttributes<HTMLDivElement> {
	sourceText?: string;
	targetLocale?: string;
	class?: string;
}
