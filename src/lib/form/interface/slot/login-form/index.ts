import type { HTMLAttributes } from 'svelte/elements';

export interface SlotLoginForm extends HTMLAttributes<HTMLFormElement> {
	email?: string;
	rememberMe?: boolean;
	class?: string;
}
