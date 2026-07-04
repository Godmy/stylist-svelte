import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export interface ContractImageWithCaption
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography {
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
