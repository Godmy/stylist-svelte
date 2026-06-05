import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';

export interface SlotProcessStep extends ArchitectureHTMLAttributes<HTMLDivElement> {
	number: number;
	title: string;
	description: string;
	agent?: string;
	icon?: string;
	active?: boolean;
}
