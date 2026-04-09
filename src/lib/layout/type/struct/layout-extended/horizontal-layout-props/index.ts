import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

type BaseLayoutProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children?: Snippet;
	gap?: string;
	align?: string;
	justify?: string;
	alignItems?: string;
	justifyContent?: string;
	fillHeight?: boolean;
};

export type HorizontalLayoutProps = BaseLayoutProps & {
	wrap?: boolean;
};
