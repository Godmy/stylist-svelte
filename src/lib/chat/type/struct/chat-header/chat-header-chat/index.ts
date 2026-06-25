import type { ChatHeaderUser } from '$stylist/chat/type/struct/chat-header/chat-header-user';

export type ChatHeaderChat = {
	id: string;
	name?: string;
	participants: ChatHeaderUser[];
	isGroup: boolean;
	lastMessage?: string;
	lastMessageTime?: Date;
	unreadCount?: number;
	avatar?: string;
};
