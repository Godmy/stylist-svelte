import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface ContractAudioSlider
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	/** Current volume */
	volume?: number;
	/** Muted state */
	muted?: boolean;
	/** On volume change callback */
	onVolumeChange?: (volume: number) => void;
	/** Additional CSS class */
	class?: string;
}
