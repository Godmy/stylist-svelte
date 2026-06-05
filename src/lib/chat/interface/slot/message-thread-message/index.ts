import type { TokenMessageStatus } from '$stylist/chat/type/enum/message-status';

export interface SlotMessageThreadMessage {
	id: string;
	text: string;
	sender: string;
	senderAvatar?: string;
	timestamp: string;
	status?: TokenMessageStatus;
	isOwn: boolean;
}
