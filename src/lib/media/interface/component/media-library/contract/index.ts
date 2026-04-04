import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

export interface MediaLibraryContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
