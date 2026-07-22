import type { HTMLAttributes } from 'svelte/elements';

export interface SlotFormWithValidation extends HTMLAttributes<HTMLFormElement> {
	email?: string;
	password?: string;
	class?: string;
}
