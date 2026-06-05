import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotMessage } from '$stylist/chat/interface/slot/message';

export interface SlotChat {
	id: string;
	name?: string;
	participants: SlotUser[];
	isGroup: boolean;
	lastMessage?: SlotMessage | string;
	lastMessageTime?: Date;
	unreadCount?: number;
	avatar?: string;
}
