import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';

export interface IPageHeaderProps extends ArchitectureHTMLAttributes<HTMLElement> {
	title?: string;
	subtitle?: string;
}
