import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface ContractAudioPlayer
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	/** Audio source */
	src?: string;
	/** Show volume control */
	showVolume?: boolean;
	/** Show speed control */
	showSpeed?: boolean;
	/** Additional CSS class */
	class?: string;
}
