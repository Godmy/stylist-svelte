import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface ContractCanvasImageEditor extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
