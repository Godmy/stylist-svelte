import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export interface ContractVideoPlayer
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography {
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
