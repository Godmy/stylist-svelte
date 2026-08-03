import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export interface RecipeAudioVisualizer extends SlotThemeBorder, SlotTypography {
	src?: string;
	type?: 'bars' | 'wave' | 'circular';
	alt?: string;
	author?: string;
	duration?: number | string;
	isPlaying?: boolean;
	onPlayToggle?: (isPlaying: boolean) => void;
	class?: string;
}
