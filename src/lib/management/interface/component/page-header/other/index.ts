import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

export interface IPageHeaderProps extends ArchitectureHTMLAttributes<HTMLElement> {
	title?: string;
	subtitle?: string;
}
