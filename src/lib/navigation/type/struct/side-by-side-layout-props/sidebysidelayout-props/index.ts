import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';

export type SideBySideLayoutProps = (Omit<LayoutHTMLAttributes<HTMLDivElement>, 'class'>) & {
	sections: {
	id: string;
	content: Snippet;
	size?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4' | 'full';
	className?: string;
}[];
	class?: string;
	gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	responsive?: boolean;
};
