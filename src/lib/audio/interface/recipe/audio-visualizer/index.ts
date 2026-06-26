import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface RecipeAudioVisualizer
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	src?: string;
	type?: 'bars' | 'wave' | 'circular';
	alt?: string;
	author?: string;
	duration?: number | string;
	isPlaying?: boolean;
	onPlayToggle?: (isPlaying: boolean) => void;
	class?: string;
}
