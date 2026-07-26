import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';

export interface VerticalLayoutProps extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	children?: Snippet;
	gap?: string | number;
	align?: string;
	justify?: string;
	alignItems?: string;
	justifyContent?: string;
	fillHeight?: boolean;
}
