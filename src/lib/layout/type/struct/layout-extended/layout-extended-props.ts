import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';

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

export type VerticalLayoutProps = BaseLayoutProps;

export type GridLayoutExtendedProps = BaseLayoutProps & {
	columns?: number | string;
	rows?: number | string;
	cols?: number | string;
};
