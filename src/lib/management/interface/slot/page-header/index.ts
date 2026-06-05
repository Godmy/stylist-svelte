import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';

export interface SlotPageHeader extends ArchitectureHTMLAttributes<HTMLElement> {
	title?: string;
	subtitle?: string;
}
