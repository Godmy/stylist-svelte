import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface ChatItemData {
	id: string;
	name?: string;
	participants: {
		id: string;
		name: string;
		avatar?: string;
		status?: 'online' | 'offline' | 'away' | 'typing';
	}[];
	isGroup: boolean;
	lastMessage?: string | { content: string; senderId: string; timestamp: Date };
	lastMessageTime?: Date;
	unreadCount?: number;
	avatar?: string;
}

export interface ChatItemUser {
	id: string;
	name: string;
	avatar?: string;
}

export type ChatItemContract = RecordArchitectureMerge<
	[
		{
			chat: ChatItemData;
			currentUser: ChatItemUser;
			isActive?: boolean;
		},
		InteractionHTMLAttributes<HTMLDivElement>
	]
>;
