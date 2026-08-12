import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
export interface SpacerProps extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	size?: number;
	axis?: 'horizontal' | 'vertical' | 'both';
	inline?: boolean;
}
