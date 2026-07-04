import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface ContractAudioSlider
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography {
	/** Current volume */
	volume?: number;
	/** Muted state */
	muted?: boolean;
	/** On volume change callback */
	onVolumeChange?: (volume: number) => void;
	/** Additional CSS class */
	class?: string;
}
