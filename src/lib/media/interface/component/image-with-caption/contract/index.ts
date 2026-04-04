import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

export interface ImageWithCaptionContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Image source */
	src?: string;
	/** Alt text */
	alt?: string;
	/** Caption text */
	caption?: string;
	/** Image width */
	width?: string;
	/** Image height */
	height?: string;
	/** Image CSS class */
	imageClass?: string;
	/** Caption CSS class */
	captionClass?: string;
	/** Rounded corners */
	rounded?: boolean;
	/** Bordered */
	bordered?: boolean;
	/** Shadow */
	shadow?: boolean;
	/** Loading mode */
	loading?: 'lazy' | 'eager';
	/** Additional CSS class */
	class?: string;
}
