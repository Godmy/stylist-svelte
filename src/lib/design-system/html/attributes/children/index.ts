import type { HTMLAttributes } from 'svelte/elements'; 
import type { Snippet } from 'svelte'; 

export type ChildrenHtmlAttributes<T extends HTMLElement = HTMLDivElement> =
	HTMLAttributes<T> & {
		children?: Snippet;
	};
