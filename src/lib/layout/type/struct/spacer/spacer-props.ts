import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';

export type SpacerProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	size?: number | string;
	axis?: 'horizontal' | 'vertical' | 'both';
	inline?: boolean;
};
