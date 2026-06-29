import type { ChatMessageStatus } from '$stylist/chat/type/alias/chat-message-status';

export interface SlotChatMessage {
	text?: string;
	sender?: string;
	senderAvatar?: string;
	timestamp?: string;
	status?: ChatMessageStatus;
	isOwn?: boolean;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	footerClass?: string;
	variant?: 'default' | 'primary' | 'secondary';
}

