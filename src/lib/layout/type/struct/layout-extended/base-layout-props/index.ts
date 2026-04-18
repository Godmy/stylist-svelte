import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

export type BaseLayoutProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children?: Snippet;
	gap?: string | number;
	align?: string;
	justify?: string;
	alignItems?: string;
	justifyContent?: string;
	fillHeight?: boolean;
};
