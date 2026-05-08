import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type BaseCardProps = HTMLAttributes<HTMLDivElement> & {
	title?: string;
	description?: string;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	children?: Snippet;
};
