import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface RecipeAudioVisualizer
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography {
	src?: string;
	type?: 'bars' | 'wave' | 'circular';
	alt?: string;
	author?: string;
	duration?: number | string;
	isPlaying?: boolean;
	onPlayToggle?: (isPlaying: boolean) => void;
	class?: string;
}
