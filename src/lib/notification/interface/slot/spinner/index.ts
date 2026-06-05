import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';

export interface SlotSpinner extends HtmlAttributesBase<HTMLDivElement> {
	size?: TokenSize;
	variant?: 'white' | 'gray' | TokenAppearance;
	label?: string;
}
