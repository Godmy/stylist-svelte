import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';

export interface GridProps extends LayoutHTMLAttributes<HTMLDivElement> {
	children: Snippet;
	class?: string;
	cols?: number;
	gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
	responsive?: boolean;
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}
