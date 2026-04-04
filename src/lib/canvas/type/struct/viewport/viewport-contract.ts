import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';

export type ViewportContract = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
};
