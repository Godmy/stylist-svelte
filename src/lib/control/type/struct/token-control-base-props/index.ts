import type { Snippet } from 'svelte';
import type { TokenControlDefinition } from '../token-control-definition';

export type TokenControlBaseProps = {
	definition: TokenControlDefinition;
	layout?: 'stack' | 'inline';
	class?: string;
	children?: Snippet;
};
