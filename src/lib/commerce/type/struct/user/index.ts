import type { Snippet } from 'svelte';

export type User = {
	id: string;
	name: string;
	email?: string;
	avatar?: string;
	role?: string;
	title?: string;
	actions?: Snippet;
};
