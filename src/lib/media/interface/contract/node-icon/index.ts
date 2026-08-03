import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export interface ContractNodeIcon extends SlotThemeBorder, SlotTypography {
	/** Additional CSS class */
	class?: string;
}
