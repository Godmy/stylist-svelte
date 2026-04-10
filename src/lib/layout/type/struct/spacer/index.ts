import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

export type SpacerProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	size?: number;
	axis?: 'horizontal' | 'vertical' | 'both';
	inline?: boolean;
};
