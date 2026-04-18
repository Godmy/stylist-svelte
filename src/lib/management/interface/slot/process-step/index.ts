import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

export interface SlotProcessStep extends ArchitectureHTMLAttributes<HTMLDivElement> {
	number: number;
	title: string;
	description: string;
	agent?: string;
	icon?: string;
	active?: boolean;
}
