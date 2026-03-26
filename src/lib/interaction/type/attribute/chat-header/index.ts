import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
import type { Snippet } from 'svelte';

export interface ChatHeaderUser {
	id: string;
	name: string;
	avatar?: string;
	status?: 'online' | 'away' | 'offline' | 'typing';
	lastSeen?: Date;
}

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

export interface ChatHeaderProps extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
	chat: ChatHeaderChat;
	currentUser: ChatHeaderUser;
	showActions?: boolean;
	class?: string;
	children?: Snippet;
}
