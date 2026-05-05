import type { TokenDensity } from '$stylist/layout/type/enum/density';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { TokenMessageStatus } from '$stylist/chat/type/enum/message-status';
import type { SlotMessageAttachment } from '$stylist/chat/interface/slot/message-attachment';
import type { SlotMessageReaction } from '$stylist/chat/interface/slot/message-reaction';

export interface SlotMessage {
	id: string;
	senderId: string;
	content: string;
	timestamp: Date;
	type?: 'text' | 'image' | 'file' | string;
	status?: TokenMessageStatus | string;
	replyTo?: string;
	attachments?: SlotMessageAttachment[];
	reactions?: SlotMessageReaction[];
}
