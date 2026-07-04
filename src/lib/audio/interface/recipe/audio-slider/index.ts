import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export interface RecipeAudioSlider
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	label?: string;
	showValue?: boolean;
	volume?: number;
	muted?: boolean;
	onVolumeChange?: (volume: number) => void;
	class?: string;
}
