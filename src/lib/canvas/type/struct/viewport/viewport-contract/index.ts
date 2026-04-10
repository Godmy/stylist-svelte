import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

export type ViewportContract = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
};
