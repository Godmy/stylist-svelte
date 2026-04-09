import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface CanvasImageEditorContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
