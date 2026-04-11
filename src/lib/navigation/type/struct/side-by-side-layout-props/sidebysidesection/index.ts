import type { Snippet } from 'svelte';

export type SideBySideSection = {
	id: string;
	content: Snippet;
	size?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4' | 'full';
	className?: string;
};
