import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

export interface SlotPageHeader extends ArchitectureHTMLAttributes<HTMLElement> {
	title?: string;
	subtitle?: string;
}
