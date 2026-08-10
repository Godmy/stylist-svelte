import type { TokenMessageStatus } from '$stylist/chat/type/alias/message-status';
export interface SlotMessage {
	id: string;
	senderId: string;
	content: string;
	timestamp: Date;
	type?: 'text' | 'image' | 'file' | string;
	status?: TokenMessageStatus | string;
	replyTo?: string;
	attachments?: ({
id?: string;
	name?: string;
	url?: string;
	type?: string;
	size?: number | string;
})[];
	reactions?: ({
emoji: string;
	count?: number;
	users?: string[];
})[];
}
