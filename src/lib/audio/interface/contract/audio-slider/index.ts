import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
export interface ContractAudioSlider extends SlotThemeBorder, SlotTypography {
	/** Current volume */
	volume?: number;
	/** Muted state */
	muted?: boolean;
	/** On volume change callback */
	onVolumeChange?: (volume: number) => void;
	/** Additional CSS class */
	class?: string;
}
