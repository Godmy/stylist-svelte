import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';

export type ViewportContract = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
};
