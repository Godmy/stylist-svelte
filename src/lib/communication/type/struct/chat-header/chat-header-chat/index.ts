import type { ChatHeaderUser } from '../chat-header-user';

export type ChatHeaderChat = {
	id: string;
	name?: string;
	participants: ChatHeaderUser[];
	isGroup: boolean;
	lastMessage?: string;
	lastMessageTime?: Date;
	unreadCount?: number;
	avatar?: string;
}
