import type { HTMLAttributes } from 'svelte/elements';

export interface SlotUserProfileCard extends HTMLAttributes<HTMLDivElement> {
	name?: string;
	role?: string;
	email?: string;
	class?: string;
}
