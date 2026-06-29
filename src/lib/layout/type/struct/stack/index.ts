import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { TokenStackDirection } from '$stylist/layout/type/alias/stack-direction';

export type StackProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children?: Snippet;
	direction?: TokenStackDirection;
	gap?: string;
	spacing?: string;
	align?: string;
	justify?: string;
	alignItems?: string;
	justifyContent?: string;
	wrap?: boolean;
};
