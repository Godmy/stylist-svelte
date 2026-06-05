import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface ContractAudioSlider
	extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Current volume */
	volume?: number;
	/** Muted state */
	muted?: boolean;
	/** On volume change callback */
	onVolumeChange?: (volume: number) => void;
	/** Additional CSS class */
	class?: string;
}
