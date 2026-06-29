import type { TokenDensity } from '$stylist/layout/type/alias/density';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';
import type { SlotMessageThreadMessage } from '$stylist/chat/interface/slot/message-thread-message';

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
