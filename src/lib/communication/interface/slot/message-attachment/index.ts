import type { TokenDensity } from '$stylist/layout/type/enum/density';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { TokenMessageStatus } from '$stylist/communication/type/enum/message-status';

export interface SlotMessageAttachment {
	id?: string;
	name?: string;
	url?: string;
	type?: string;
	size?: number | string;
}
