import type { TokenDensity } from '$stylist/layout/type/enum/density';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { TokenMessageStatus } from '$stylist/communication/type/enum/message-status';
import type { SlotMessageThreadMessage } from '$stylist/communication/interface/slot/message-thread-message';

export interface SlotMessageThread extends HtmlAttributesBase<HTMLDivElement> {
	title?: string;
	messages?: SlotMessageThreadMessage[];
	containerClass?: string;
	messageContainerClass?: string;
	headerClass?: string;
	loading?: boolean;
	variant?: TokenDensity;
	messageVariant?: TokenAppearance;
}
