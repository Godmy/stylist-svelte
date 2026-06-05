import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { Snippet } from 'svelte';

export type WidgetContainerProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
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
