import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot/html-attributes-with-children';
import type { TokenMessageStatus } from '$stylist/chat/type/enum/message-status';

export interface SlotChatMessage extends HtmlAttributesWithChildren<HTMLDivElement> {
	text?: string;
	sender?: string;
	senderAvatar?: string;
	timestamp?: string;
	status?: TokenMessageStatus;
	isOwn?: boolean;
	contentClass?: string;
	headerClass?: string;
	footerClass?: string;
	variant?: TokenAppearance;
}
