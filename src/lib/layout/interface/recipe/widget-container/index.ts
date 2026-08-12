import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
export interface RecipeWidgetContainer extends LayoutHTMLAttributes<HTMLDivElement> {
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
}
