import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
export interface RecipeSpacer extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string;
	axis?: 'horizontal' | 'vertical' | 'both';
	inline?: boolean;
}
