import type { HTMLAttributes } from 'svelte/elements';

export interface SlotAccountSettingsForm extends HTMLAttributes<HTMLFormElement> {
	name?: string;
	email?: string;
	locale?: string;
	class?: string;
}
