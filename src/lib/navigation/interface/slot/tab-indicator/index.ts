import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';

export interface SlotTabIndicator extends HtmlAttributesBase<HTMLDivElement> {
	left?: string;
	width?: string;
	color?: TokenColorTone;
	size?: TokenSize;
	disabled?: boolean;
}
