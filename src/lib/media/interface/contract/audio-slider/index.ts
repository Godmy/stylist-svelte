import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface ContractAudioSlider extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Current volume */
	volume?: number;
	/** Muted state */
	muted?: boolean;
	/** On volume change callback */
	onVolumeChange?: (volume: number) => void;
	/** Additional CSS class */
	class?: string;
}
