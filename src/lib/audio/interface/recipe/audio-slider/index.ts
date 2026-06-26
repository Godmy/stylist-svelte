import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface RecipeAudioSlider
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
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
