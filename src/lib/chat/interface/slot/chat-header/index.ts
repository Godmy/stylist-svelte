import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { Snippet } from 'svelte';
import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotChat } from '$stylist/chat/interface/slot/chat';

// ChatHeader props interface
export interface SlotChatHeader extends InteractionHTMLAttributes<HTMLDivElement> {
	chat: SlotChat;
	currentUser: SlotUser;
	showActions?: boolean;
	class?: string;
	children?: Snippet;
}
