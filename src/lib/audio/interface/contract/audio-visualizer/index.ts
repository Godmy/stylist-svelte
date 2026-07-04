import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export interface ContractAudioVisualizer
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography {
	/** Audio source */
	src?: string;
	/** Visualizer type */
	type?: 'bars' | 'wave' | 'circular';
	/** Additional CSS class */
	class?: string;
}
