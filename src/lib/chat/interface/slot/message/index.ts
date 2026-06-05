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
