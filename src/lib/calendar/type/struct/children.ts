import type { Snippet } from 'svelte';

export interface ChildrenHtmlAttributes<T extends Element> {
	children?: Snippet<[T]>;
}
