import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { Snippet } from 'svelte';
import type { ChatHeaderChat } from '../chat-header-chat';
import type { ChatHeaderUser } from '../chat-header-user';

export type ChatHeaderProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> & {
	chat: ChatHeaderChat;
	currentUser: ChatHeaderUser;
	showActions?: boolean;
	class?: string;
	children?: Snippet;
}
