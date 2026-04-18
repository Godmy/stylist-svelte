import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { SlotInlineBase } from '$stylist/navigation/interface/slot/inline-base';

export interface SlotLink extends SlotInlineBase<HTMLAnchorElement> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	underline?: boolean;
	href?: string;
	target?: string;
	text?: string;
	'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
}
