import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';

export type SpacerProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	size?: number;
	axis?: 'horizontal' | 'vertical' | 'both';
	inline?: boolean;
};
