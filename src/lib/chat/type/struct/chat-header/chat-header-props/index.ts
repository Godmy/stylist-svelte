import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ChatHeaderChat } from '$stylist/chat/type/struct/chat-header/chat-header-chat';
import type { ChatHeaderUser } from '$stylist/chat/type/struct/chat-header/chat-header-user';

export type ChatHeaderProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotInteraction & {
	chat: ChatHeaderChat;
	currentUser: ChatHeaderUser;
	showActions?: boolean;
	class?: string;
	children?: Snippet;
};
