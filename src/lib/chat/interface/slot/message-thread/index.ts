import type { TokenDensity } from '$stylist/layout/type/alias/density';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
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
	messageVariant?: TokenColorTone;
}
