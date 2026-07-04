import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { TokenFontSize } from '$stylist/theme/type/alias/font-size';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

export interface SlotLink extends SlotChildren {
	tone?: TokenColorTone;
	fontSize?: TokenFontSize;
	disabled?: boolean;
	underline?: boolean;
	href?: string;
	target?: string;
	text?: string;
	'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
}
