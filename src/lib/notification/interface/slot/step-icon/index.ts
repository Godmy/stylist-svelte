import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';

export interface SlotStepIcon extends HtmlAttributesBase<HTMLSpanElement> {
	status?: 'pending' | 'active' | 'completed' | 'error';
	size?: TokenSize;
	stepNumber?: number;
	iconName?: string;
}
