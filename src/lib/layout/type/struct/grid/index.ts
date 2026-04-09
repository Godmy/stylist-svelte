import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

export type GridContract = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
};
