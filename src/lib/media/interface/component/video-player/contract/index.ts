import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface VideoPlayerContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Video source */
	src?: string;
	/** Poster image */
	poster?: string;
	/** Show controls */
	showControls?: boolean;
	/** Auto play */
	autoPlay?: boolean;
	/** Loop */
	loop?: boolean;
	/** Muted */
	muted?: boolean;
	/** Additional CSS class */
	class?: string;
}
