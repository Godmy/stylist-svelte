import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { Snippet } from 'svelte';

export type WidgetContainerProps = LayoutHTMLAttributes<HTMLDivElement> & {
	title?: string;
	subtitle?: string;
	content: Snippet;
	actions?: Snippet;
	collapsible?: boolean;
	initiallyCollapsed?: boolean;
	resizable?: boolean;
	draggable?: boolean;
	maximizable?: boolean;
	size?: 'sm' | 'md' | 'lg';
	headerClass?: string;
	bodyClass?: string;
};
