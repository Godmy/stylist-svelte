import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface AudioPlayerContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Audio source */
	src?: string;
	/** Show volume control */
	showVolume?: boolean;
	/** Show speed control */
	showSpeed?: boolean;
	/** Additional CSS class */
	class?: string;
}
