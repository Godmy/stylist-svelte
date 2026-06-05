import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';

export interface SlotTabIndicator extends HtmlAttributesBase<HTMLDivElement> {
	left?: string;
	width?: string;
	color?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
}
