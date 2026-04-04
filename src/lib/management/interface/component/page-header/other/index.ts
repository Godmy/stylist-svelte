import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';

export interface IPageHeaderProps extends ArchitectureHTMLAttributes<HTMLElement> {
	title?: string;
	subtitle?: string;
}
