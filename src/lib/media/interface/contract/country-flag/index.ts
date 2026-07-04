import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface ContractCountryFlag
	extends Omit<HTMLAttributes<HTMLSpanElement>, 'class'>, SlotThemeBorder, BehaviorTypography {
	/** SlotCountry code (ISO 3166-1 alpha-2) */
	code: string;
	/** Flag size */
	size?: number | string;
	/** Rounded corners */
	rounded?: boolean;
	/** Shadow */
	shadow?: boolean;
	/** Additional CSS class */
	class?: string;
}
