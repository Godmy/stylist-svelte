import type { HTMLAttributes } from 'svelte/elements';

export interface SlotSecureForm extends HTMLAttributes<HTMLFormElement> {
	token?: string;
	class?: string;
}
