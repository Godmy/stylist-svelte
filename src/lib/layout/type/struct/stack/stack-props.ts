import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';

export type StackProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children?: Snippet;
	direction?: 'row' | 'column';
	gap?: string;
	spacing?: string;
	align?: string;
	justify?: string;
	alignItems?: string;
	justifyContent?: string;
	wrap?: boolean;
};
