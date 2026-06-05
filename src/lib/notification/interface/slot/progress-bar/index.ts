import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';

export interface SlotProgressBar extends HtmlAttributesBase<HTMLDivElement> {
	value: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	size?: TokenSize;
	variant?: TokenAppearance;
}
