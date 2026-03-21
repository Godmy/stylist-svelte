import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type ContentHtmlAttributes<T extends HTMLElement = HTMLDivElement> =
	HTMLAttributes<T> & {
		content?: Snippet;
	};
