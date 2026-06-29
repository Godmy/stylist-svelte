import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';

export interface SlotLink extends SlotChildren {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	underline?: boolean;
	href?: string;
	target?: string;
	text?: string;
	'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
}
