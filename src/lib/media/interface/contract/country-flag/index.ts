import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface ContractCountryFlag extends Omit<InformationHTMLAttributes<HTMLSpanElement>, 'class'> {
	/** SlotCountry code (ISO 3166-1 alpha-2) */
	code: string;
	/** Flag size */
	size?: number | string;
	/** Rounded corners */
	rounded?: boolean;
	/** Shadow */
	shadow?: boolean;
	/** Additional CSS class */
	class?: string;
}
