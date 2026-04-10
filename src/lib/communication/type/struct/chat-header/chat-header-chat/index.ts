import type { ChatHeaderUser } from '../chat-header-user';

export interface ChatHeaderChat {
	id: string;
	name?: string;
	participants: ChatHeaderUser[];
	isGroup: boolean;
	lastMessage?: string;
	lastMessageTime?: Date;
	unreadCount?: number;
	avatar?: string;
}
