import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface ContractAudioPlayer
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography {
	/** Audio source */
	src?: string;
	/** Show volume control */
	showVolume?: boolean;
	/** Show speed control */
	showSpeed?: boolean;
	/** Additional CSS class */
	class?: string;
}
