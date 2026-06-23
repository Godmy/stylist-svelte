import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';

export type GridProps = Omit<LayoutHTMLAttributes<HTMLDivElement>, 'class'> & {
	children: Snippet;
	class?: string;
	cols?: number;
	gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
	responsive?: boolean;
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
};
