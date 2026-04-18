import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot';

export interface SlotInlineText extends HtmlAttributesWithChildren<HTMLElement> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
}
