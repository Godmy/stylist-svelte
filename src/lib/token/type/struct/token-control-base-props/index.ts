import type { Snippet } from 'svelte';
import type { TokenControlDefinition } from '$stylist/token/type/struct/token-control-definition';

export type TokenControlBaseProps = {
	definition: TokenControlDefinition;
	layout?: 'stack' | 'inline';
	class?: string;
	children?: Snippet;
};
