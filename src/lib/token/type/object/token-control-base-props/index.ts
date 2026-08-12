import type { Snippet } from 'svelte';
import type { TokenControlDefinition } from '$stylist/token/type/object/token-control-definition';

export type TokenControlBaseProps = {
	definition: TokenControlDefinition;
	layout?: 'stack' | 'inline';
	class?: string;
	children?: Snippet;
};
