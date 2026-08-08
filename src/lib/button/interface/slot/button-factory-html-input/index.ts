import type { HTMLButtonAttributes } from 'svelte/elements';

export interface ButtonFactoryHtmlInput {
	class?: string;
	type?: HTMLButtonAttributes['type'];
	attrs: Omit<
		HTMLButtonAttributes,
		| 'class'
		| 'type'
		| 'disabled'
		| 'children'
		| 'ariaLabel'
		| 'variant'
		| 'size'
		| 'loading'
		| 'block'
	>;
}
