import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface RecipeAudioSlider
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography {
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
