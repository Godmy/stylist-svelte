import type { HTMLAttributes } from 'svelte/elements';
import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotMessage } from '$stylist/chat/interface/slot/message';

export interface SlotChatRoom extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	messages: SlotMessage[];
	currentUser: SlotUser;
	participants: SlotUser[];
	title?: string;
	subtitle?: string;
	class?: string;
	messagesClass?: string;
	headerClass?: string;
	footerClass?: string;
	onMessageSend?: (text: string) => void;
	loading?: boolean;
	variant?: 'default' | 'compact' | 'spacious';
}
