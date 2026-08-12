import type { Snippet } from 'svelte';
export interface SlotComposite<T = unknown> {
	children?: Snippet<[T]>;
}
