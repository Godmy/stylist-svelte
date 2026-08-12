import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
export interface SlotProcessStep extends LayoutHTMLAttributes<HTMLDivElement> {
	number: number;
	title: string;
	description: string;
	agent?: string;
	icon?: string;
	active?: boolean;
}
