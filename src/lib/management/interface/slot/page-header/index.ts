import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
export interface SlotPageHeader extends LayoutHTMLAttributes<HTMLElement> {
	title?: string;
	subtitle?: string;
}
