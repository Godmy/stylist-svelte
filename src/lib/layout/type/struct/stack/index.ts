import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
import type { TokenStackDirection } from '$stylist/layout/type/enum/stack-direction';

export type StackProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
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
